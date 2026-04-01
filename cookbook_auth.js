// ================================================================
//  cookbook_auth.js — Cookbook Paywall & Auth System (Updated)
// ================================================================

import { auth, db, onAuthStateChanged } from './firebase_config.js';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  sendPasswordResetEmail
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// ── State ──────────────────────────────────────────────────────
const google_provider = new GoogleAuthProvider();
google_provider.setCustomParameters({ prompt: 'select_account' });

let current_user = null;
let cookbook_unlocked = false;
let preview_used = false;

// ── Update nav bar helper ──────────────────────────────────────
function update_nav(user) {
  const navEmail = document.getElementById('nav-user-email');
  const signInBtn = document.getElementById('sign-in-btn');
  const createBtn = document.getElementById('create-account-btn');
  const signOutBtn = document.getElementById('sign-out-btn');

  if (user) {
    if (navEmail) navEmail.textContent = `Welcome, ${user.displayName || user.email}`;
    if (signInBtn) signInBtn.style.display = 'none';
    if (createBtn) createBtn.style.display = 'none';
    if (signOutBtn) signOutBtn.style.display = 'inline-block';
  } else {
    if (navEmail) navEmail.textContent = 'Welcome, Guest';
    if (signInBtn) signInBtn.style.display = 'inline-block';
    if (createBtn) createBtn.style.display = 'inline-block';
    if (signOutBtn) signOutBtn.style.display = 'none';
  }
}

// ── Check Firestore for paid status ───────────────────────────
async function check_paid_status(uid) {
  try {
    const snap = await getDoc(doc(db, 'users', uid));
    cookbook_unlocked = snap.exists() && snap.data().paid === true;
  } catch (e) {
    cookbook_unlocked = false;
  }
}

// ── Handle redirect result from Google ────────────────────────
getRedirectResult(auth).then(async (result) => {
  if (result && result.user) {
    const user = result.user;
    const snap = await getDoc(doc(db, 'users', user.uid));
    if (!snap.exists()) {
      await setDoc(doc(db, 'users', user.uid), {
        email: user.email,
        paid: false,
        created: new Date().toISOString()
      });
    }
    await check_paid_status(user.uid);
    current_user = user;
    update_nav(user);
  }
}).catch(console.error);

// ── Auth state listener ────────────────────────────────────────
onAuthStateChanged(auth, async (user) => {
  if (user) {
    current_user = user;
    await check_paid_status(user.uid);
    update_nav(user);
  } else {
    current_user = null;
    cookbook_unlocked = false;
    update_nav(null);
  }
});

// ── Wire up buttons after DOM loads ───────────────────────────
document.addEventListener('DOMContentLoaded', function() {

  // Google sign in
  const googleBtn = document.getElementById('google-sign-in-btn');
  if (googleBtn) googleBtn.addEventListener('click', async () => {
    try { await signInWithRedirect(auth, google_provider); } 
    catch (e) { show_auth_error(e.message); }
  });

  // Email sign in
  const emailSignInBtn = document.getElementById('email-sign-in-btn');
  if (emailSignInBtn) emailSignInBtn.addEventListener('click', async () => {
    const email = document.getElementById('auth_email').value.trim();
    const password = document.getElementById('auth_password').value;
    try { await signInWithEmailAndPassword(auth, email, password); } 
    catch { show_auth_error('Incorrect email or password.'); }
  });

  // Create account
  const emailCreateBtn = document.getElementById('email-create-btn');
  if (emailCreateBtn) emailCreateBtn.addEventListener('click', async () => {
    const email = document.getElementById('auth_email').value.trim();
    const password = document.getElementById('auth_password').value;
    if (password.length < 6) { show_auth_error('Password must be at least 6 characters.'); return; }
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, 'users', cred.user.uid), {
        email: email,
        paid: false,
        created: new Date().toISOString()
      });
    } catch (e) { show_auth_error(e.message || 'Could not create account.'); }
  });

  // Sign out
  const signOutBtn = document.getElementById('sign-out-btn');
  if (signOutBtn) signOutBtn.addEventListener('click', async () => {
    try { await signOut(auth); } catch (e) { console.error(e); }
  });

  // ── Password recovery ──
  const forgotBtn = document.getElementById('forgot-password-btn');
  if (forgotBtn) forgotBtn.addEventListener('click', async () => {
    const email = document.getElementById('auth_email').value.trim();
    if (!email) { show_auth_error('Please enter your email to reset password.'); return; }
    try {
      await sendPasswordResetEmail(auth, email);
      show_auth_error('Password reset email sent! Check your inbox.');
    } catch (e) {
      show_auth_error(e.message || 'Could not send password reset email.');
    }
  });

});

// ── Auth error helper ──────────────────────────────────────────
function show_auth_error(msg) {
  const err_el = document.getElementById('auth_error');
  if (err_el) {
    err_el.textContent = msg;
    err_el.style.display = 'block';
  }
}