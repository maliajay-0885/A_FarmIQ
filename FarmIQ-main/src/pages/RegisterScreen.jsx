import { useState } from "react";

import Icon from "@/components/common/Icon";
import Logo from "@/components/common/Logo";
import TextInput from "@/components/common/TextInput";
import { PrimaryButton } from "@/components/common/Button";

/**
 * Registration screen — no BottomNavigation (auth flow).
 *
 * @param {object}   props
 * @param {Function} props.navigate  - Navigate to a screen by key.
 * @param {Function} props.onLogin   - Called with user data on successful registration.
 */
export default function RegisterScreen({ navigate, onLogin }) {
  // ── form fields ──────────────────────────────────────────────────────────
  const [fullName,        setFullName]        = useState("");
  const [email,           setEmail]           = useState("");
  const [countryCode,     setCountryCode]     = useState("+91");
  const [mobile,          setMobile]          = useState("");
  const [password,        setPassword]        = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role,            setRole]            = useState("");
  const [agreed,          setAgreed]          = useState(false);
  const [showPassword,    setShowPassword]    = useState(false);
  const [showConfirm,     setShowConfirm]     = useState(false);

  // ── async state ──────────────────────────────────────────────────────────
  const [loading,  setLoading]  = useState(false);
  const [errors,   setErrors]   = useState({});
  const [toast,    setToast]    = useState(null); // { type: "success"|"error", message }

  // ── helpers ──────────────────────────────────────────────────────────────
  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 5000);
  };

  const validate = () => {
    const errs = {};

    if (!fullName.trim())
      errs.fullName = "Full name is required.";
    else if (fullName.trim().length < 2)
      errs.fullName = "Name must be at least 2 characters.";

    if (!email.trim())
      errs.email = "Email address is required.";
    else if (!/^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(email.trim()))
      errs.email = "Please enter a valid email address (e.g. you@example.com)";

    if (!mobile.trim())
      errs.mobile = "Mobile number is required.";
    else if (!/^\d{10}$/.test(mobile.trim()))
      errs.mobile = "Mobile number must be exactly 10 digits.";

    if (!password)
      errs.password = "Password is required.";
    else if (password.length < 8)
      errs.password = "Password must be at least 8 characters.";
    else if (!/(?=.*[A-Z])/.test(password))
      errs.password = "Password must contain at least one uppercase letter.";
    else if (!/(?=.*\d)/.test(password))
      errs.password = "Password must contain at least one number.";

    if (!confirmPassword)
      errs.confirmPassword = "Please confirm your password.";
    else if (password !== confirmPassword)
      errs.confirmPassword = "Passwords do not match.";

    if (!role)
      errs.role = "Please select your role.";

    if (!agreed)
      errs.agreed = "You must accept the Terms and Conditions.";

    return errs;
  };

  const handleSubmit = async () => {
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    setLoading(true);
    try {
      const res = await fetch("http://127.0.0.1:8000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          full_name:    fullName.trim(),
          email:        email.trim().toLowerCase(),
          mobile:       `${countryCode}${mobile.trim()}`,
          role,
          password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        showToast("success", "Account created! Taking you to your dashboard…");
        setTimeout(() => onLogin(data), 2000);
      } else if (res.status === 409) {
        setErrors({ email: data.detail ?? "Email is already registered." });
      } else {
        showToast("error", data.detail ?? "Registration failed. Please try again.");
      }
    } catch {
      showToast("error", "Unable to connect to the server. Check your connection.");
    } finally {
      setLoading(false);
    }
  };

  // ── country codes (common selection) ─────────────────────────────────────
  const countryCodes = [
    { code: "+91",  label: "🇮🇳 +91"  },
    { code: "+1",   label: "🇺🇸 +1"   },
    { code: "+44",  label: "🇬🇧 +44"  },
    { code: "+61",  label: "🇦🇺 +61"  },
    { code: "+27",  label: "🇿🇦 +27"  },
    { code: "+234", label: "🇳🇬 +234" },
    { code: "+254", label: "🇰🇪 +254" },
    { code: "+55",  label: "🇧🇷 +55"  },
    { code: "+86",  label: "🇨🇳 +86"  },
    { code: "+880", label: "🇧🇩 +880" },
    { code: "+92",  label: "🇵🇰 +92"  },
  ];

  const roles = [
    { value: "farmer",              label: "🌾 Farmer"             },
    { value: "farm_manager",        label: "🏡 Farm Manager"       },
    { value: "agricultural_expert", label: "🔬 Agricultural Expert" },
  ];

  // ── password strength ─────────────────────────────────────────────────────
  const getStrength = () => {
    if (!password) return 0;
    let s = 0;
    if (password.length >= 8)          s++;
    if (/[A-Z]/.test(password))        s++;
    if (/\d/.test(password))           s++;
    if (/[^A-Za-z0-9]/.test(password)) s++;
    return s;
  };
  const strength = getStrength();
  const strengthLabels = ["", "Weak", "Fair", "Good", "Strong"];
  const strengthColors = ["", "#E74C3C", "#E67E22", "#F1C40F", "#216B45"];

  // ── render ────────────────────────────────────────────────────────────────
  return (
    <main
      className="mx-auto flex min-h-dvh w-full max-w-[390px] flex-col overflow-hidden bg-[#F7F9F5] shadow-[0_0_60px_rgba(26,57,40,.12)] sm:min-h-[844px] sm:rounded-[30px]"
      role="main"
    >
      {/* ── toast notification ── */}
      {toast && (
        <div
          aria-live="polite"
          role="alert"
          className={`fixed left-1/2 top-4 z-50 w-[calc(100%-2rem)] max-w-[350px] -translate-x-1/2 rounded-2xl px-4 py-3 text-[13px] font-semibold text-white shadow-lg transition-all ${
            toast.type === "success" ? "bg-[#216B45]" : "bg-[#C0392B]"
          }`}
        >
          <div className="flex items-center gap-2">
            <Icon name={toast.type === "success" ? "check" : "shield"} size={16} />
            {toast.message}
          </div>
        </div>
      )}

      {/* ── scrollable content ── */}
      <div className="flex min-h-0 flex-1 flex-col overflow-y-auto px-5 pb-8 pt-6">

        {/* header */}
        <div className="mb-6 flex items-center justify-between">
          <Logo />
          <button
            aria-label="Go back"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#DFE7E1] bg-white text-[#216B45] shadow-sm"
            onClick={() => navigate("login")}
          >
            <Icon name="arrow" size={18} className="rotate-180" />
          </button>
        </div>

        {/* hero text */}
        <div className="mb-6">
          <p className="mb-1 text-[13px] font-bold text-[#4D7A61]">Get started</p>
          <h1 className="text-[26px] font-extrabold leading-[1.15] tracking-[-0.04em] text-[#17392A]">
            Create Your FarmIQ Account
          </h1>
          <p className="mt-2 text-[13px] leading-5 text-[#718279]">
            Join thousands of farmers using AI-powered insights.
          </p>
        </div>

        {/* ── form card ── */}
        <div className="rounded-[24px] border border-[#E6EBE7] bg-white p-5 shadow-[0_5px_24px_rgba(31,57,44,.07)]">

          {/* full name */}
          <Field label="Full Name" error={errors.fullName}>
            <TextInput
              icon="person"
              placeholder="e.g. Ravi Kumar"
              value={fullName}
              onChange={setFullName}
            />
          </Field>

          {/* email */}
          <Field label="Email Address" error={errors.email}>
            <TextInput
              icon="mail"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={setEmail}
            />
          </Field>

          {/* mobile number */}
          <Field label="Mobile Number" error={errors.mobile}>
            <div className="flex gap-2">
              {/* country code selector */}
              <div className="relative flex-shrink-0">
                <select
                  aria-label="Country code"
                  className="h-13 appearance-none rounded-2xl border border-[#DFE7E1] bg-white pl-3 pr-8 text-[13px] font-semibold text-[#1E382B] shadow-[0_3px_12px_rgba(31,57,44,.04)] outline-none focus:border-[#216B45]"
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                >
                  {countryCodes.map((c) => (
                    <option key={c.code} value={c.code}>{c.label}</option>
                  ))}
                </select>
                <Icon
                  name="chevron"
                  size={13}
                  className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 rotate-90 text-[#8A9A91]"
                />
              </div>
              {/* number input */}
              <label className="flex flex-1 h-13 items-center gap-3 rounded-2xl border border-[#DFE7E1] bg-white px-4 shadow-[0_3px_12px_rgba(31,57,44,.04)]">
                <Icon name="phone" size={19} className="shrink-0 text-[#7A8E82]" />
                <input
                  aria-label="Mobile number"
                  className="min-w-0 flex-1 bg-transparent text-[14px] text-[#1E382B] outline-none placeholder:text-[#8A9A91]"
                  inputMode="numeric"
                  maxLength={10}
                  size={10}
                  pattern="\d{10}"
                  placeholder="9876543210"
                  type="tel"
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value.replace(/\D/g, "").slice(0, 10))}
                />
              </label>
            </div>
          </Field>

          {/* password */}
          <Field label="Password" error={errors.password}>
            <div className="relative">
              <TextInput
                icon="lock"
                type={showPassword ? "text" : "password"}
                placeholder="Min. 8 chars, uppercase & number"
                value={password}
                onChange={setPassword}
              />
              <button
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8A9A91]"
                onClick={() => setShowPassword((p) => !p)}
                type="button"
              >
                <Icon name={showPassword ? "eye-off" : "eye"} size={18} />
              </button>
            </div>
            {/* strength bar */}
            {password.length > 0 && (
              <div className="mt-2 space-y-1">
                <div className="flex gap-1">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-1 flex-1 rounded-full transition-all"
                      style={{
                        background: i <= strength ? strengthColors[strength] : "#E6EBE7",
                      }}
                    />
                  ))}
                </div>
                <p className="text-[11px] font-semibold" style={{ color: strengthColors[strength] }}>
                  {strengthLabels[strength]}
                </p>
              </div>
            )}
          </Field>

          {/* confirm password */}
          <Field label="Confirm Password" error={errors.confirmPassword}>
            <div className="relative">
              <TextInput
                icon="lock"
                type={showConfirm ? "text" : "password"}
                placeholder="Re-enter your password"
                value={confirmPassword}
                onChange={setConfirmPassword}
              />
              <button
                aria-label={showConfirm ? "Hide confirm password" : "Show confirm password"}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8A9A91]"
                onClick={() => setShowConfirm((p) => !p)}
                type="button"
              >
                <Icon name={showConfirm ? "eye-off" : "eye"} size={18} />
              </button>
            </div>
          </Field>

          {/* role */}
          <Field label="Role" error={errors.role}>
            <div className="grid grid-cols-1 gap-2">
              {roles.map((r) => (
                <button
                  key={r.value}
                  type="button"
                  aria-pressed={role === r.value}
                  className={`flex h-11 items-center gap-3 rounded-2xl border px-4 text-left text-[13px] font-semibold transition active:scale-[.98] ${
                    role === r.value
                      ? "border-[#216B45] bg-[#EBF5EF] text-[#216B45]"
                      : "border-[#DFE7E1] bg-[#FAFBFA] text-[#4D6257]"
                  }`}
                  onClick={() => setRole(r.value)}
                >
                  <span
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 transition ${
                      role === r.value ? "border-[#216B45]" : "border-[#C4D0C8]"
                    }`}
                  >
                    {role === r.value && (
                      <span className="h-2.5 w-2.5 rounded-full bg-[#216B45]" />
                    )}
                  </span>
                  {r.label}
                </button>
              ))}
            </div>
          </Field>

          {/* terms checkbox */}
          <div className="mt-1">
            <label className="flex cursor-pointer items-start gap-3">
              <span
                role="checkbox"
                aria-checked={agreed}
                tabIndex={0}
                className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border-2 transition ${
                  agreed
                    ? "border-[#216B45] bg-[#216B45]"
                    : errors.agreed
                    ? "border-[#C0392B]"
                    : "border-[#C4D0C8]"
                }`}
                onClick={() => setAgreed((a) => !a)}
                onKeyDown={(e) => e.key === " " && setAgreed((a) => !a)}
              >
                {agreed && <Icon name="check" size={13} className="text-white" />}
              </span>
              <span className="text-[12px] leading-5 text-[#718279]">
                I agree to FarmIQ's{" "}
                <span className="font-semibold text-[#216B45]">Terms and Conditions</span>{" "}
                and{" "}
                <span className="font-semibold text-[#216B45]">Privacy Policy</span>.
              </span>
            </label>
            {errors.agreed && (
              <p className="mt-1 text-[11px] font-semibold text-[#C0392B]">{errors.agreed}</p>
            )}
          </div>
        </div>

        {/* ── submit ── */}
        <div className="mt-5">
          <PrimaryButton
            onClick={handleSubmit}
            className={loading ? "opacity-70 pointer-events-none" : ""}
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <Spinner />
                Creating Account…
              </span>
            ) : (
              <>
                <Icon name="sparkles" size={18} />
                Create Account
              </>
            )}
          </PrimaryButton>
        </div>

        {/* ── sign in link ── */}
        <p className="mt-5 text-center text-[13px] text-[#718279]">
          Already have an account?{" "}
          <button
            className="font-bold text-[#216B45] underline-offset-2 hover:underline"
            onClick={() => navigate("login")}
          >
            Sign In
          </button>
        </p>

      </div>
    </main>
  );
}

// ── tiny sub-components ────────────────────────────────────────────────────

/** Labelled form field with optional error message. */
function Field({ label, error, children }) {
  return (
    <div className="mb-4">
      <label className="mb-1.5 block text-[12px] font-bold uppercase tracking-[.08em] text-[#5A7266]">
        {label}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1 text-[11px] font-semibold text-[#C0392B]">
          {error}
        </p>
      )}
    </div>
  );
}

/** Small inline loading spinner. */
function Spinner() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4 animate-spin"
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        className="opacity-25"
        cx="12" cy="12" r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}
