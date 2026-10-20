import { useState, useCallback } from "react";

import DesktopNavigation from "@/components/layout/DesktopNavigation";
import LanguageSheet from "@/components/layout/LanguageSheet";
import ScreenShell from "@/components/layout/ScreenShell";
import ProfilePanel from "@/components/layout/ProfilePanel";
import ModuleHub from "@/components/modules/ModuleHub";
import ModuleScreen from "@/components/modules/ModuleScreen";

import HomeScreen from "@/pages/HomeScreen";
import ChatScreen from "@/pages/ChatScreen";
import FarmScreen from "@/pages/FarmScreen";
import AdviceScreen from "@/pages/AdviceScreen";
import HistoryScreen from "@/pages/HistoryScreen";
import LoginScreen from "@/pages/LoginScreen";
import RegisterScreen from "@/pages/RegisterScreen";

/**
 * Root application component.
 *
 * Manages top-level navigation state and renders the correct screen.
 * The desktop sidebar is shown at lg+ breakpoints alongside the mobile shell.
 *
 * Callbacks are memoized with useCallback to avoid triggering unnecessary
 * re-renders in child components that receive them as props.
 */
export default function App() {
  // Start on the login screen so users authenticate before accessing the app.
  const [screen, setScreen]               = useState("login");
  const [language, setLanguage]           = useState("English");
  const [languageOpen, setLanguageOpen]   = useState(false);
  const [selectedModule, setSelectedModule] = useState("crop-recommendation");

  // Logged-in user data (null when not authenticated).
  const [user, setUser]             = useState(null);
  const [profileOpen, setProfileOpen] = useState(false);

  const navigate = useCallback((next) => {
    setScreen(next);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const openModule = useCallback((module) => {
    setSelectedModule(module);
    setScreen("module");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const openLanguages = useCallback(() => setLanguageOpen(true), []);

  const handleLanguageSelect = useCallback((next) => {
    setLanguage(next);
    setLanguageOpen(false);
  }, []);

  /** Called by LoginScreen / RegisterScreen once auth succeeds. */
  const handleLogin = useCallback((userData) => {
    setUser(userData);
    navigate("home");
  }, [navigate]);

  /** Log out — clear user data and return to login. */
  const handleLogout = useCallback(() => {
    setProfileOpen(false);
    setUser(null);
    setScreen("login");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // ── Auth screens (no desktop nav / bottom nav) ────────────────────────────
  if (screen === "login") {
    return <LoginScreen navigate={navigate} onLogin={handleLogin} />;
  }
  if (screen === "register") {
    return <RegisterScreen navigate={navigate} onLogin={handleLogin} />;
  }

  // ── Main app ──────────────────────────────────────────────────────────────
  return (
    <div className="relative min-h-dvh bg-[#E9EFEA] lg:flex lg:items-start lg:justify-center lg:gap-5 lg:px-6 lg:py-6">
      <DesktopNavigation
        activeModule={screen === "module" ? selectedModule : undefined}
        onAssistant={() => navigate("chat")}
        onHome={() => navigate("home")}
        onOpen={openModule}
      />

      <div className="w-full max-w-[390px]">
        {screen === "home" && (
          <HomeScreen
            language={language}
            navigate={navigate}
            openLanguages={openLanguages}
            openTools={() => navigate("more")}
            user={user}
            onOpenProfile={() => setProfileOpen(true)}
          />
        )}
        {screen === "chat" && (
          <ChatScreen
            language={language}
            navigate={navigate}
            openLanguages={openLanguages}
            openModule={openModule}
          />
        )}
        {screen === "farm"    && <FarmScreen    navigate={navigate} />}
        {screen === "advice"  && <AdviceScreen  navigate={navigate} />}
        {screen === "history" && <HistoryScreen navigate={navigate} />}
        {screen === "more" && (
          <ScreenShell active="home" navigate={navigate}>
            <ModuleHub onBack={() => navigate("home")} onOpen={openModule} />
          </ScreenShell>
        )}
        {screen === "module" && (
          <ScreenShell active="home" navigate={navigate}>
            <ModuleScreen
              currentLanguage={language}
              moduleKey={selectedModule}
              onAsk={() => navigate("chat")}
              onBack={() => navigate("more")}
              onLanguage={setLanguage}
            />
          </ScreenShell>
        )}
      </div>

      {languageOpen && (
        <div className="fixed inset-0 z-50 mx-auto w-full max-w-[390px]">
          <LanguageSheet
            onClose={() => setLanguageOpen(false)}
            onSelect={handleLanguageSelect}
            selected={language}
          />
        </div>
      )}

      {/* Profile panel — rendered above everything else */}
      {profileOpen && (
        <ProfilePanel
          user={user}
          onClose={() => setProfileOpen(false)}
          onLogout={handleLogout}
          onUpdate={(updated) => setUser(updated)}
        />
      )}
    </div>
  );
}
