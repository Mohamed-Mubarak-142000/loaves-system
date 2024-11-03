import LanguageDirProvider from "./providers/language-dir.provider";
import RouterProvider from "./providers/router.provider";
import { ThemeProvider } from "./providers/theme.provider";

function App() {
  return (
    <>
      <LanguageDirProvider>
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          <RouterProvider />
        </ThemeProvider>
      </LanguageDirProvider>
    </>
  );
}

export default App;
