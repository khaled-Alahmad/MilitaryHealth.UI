import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export function getProjectThemeConfig() {
  const ProjectTheme = definePreset(Aura, {
    semantic: {
      primary: {
        50: '#e5e3d8',  // Slightly darker wheat background
        100: '#e5e3d8', // Slightly darker wheat
        200: '#a89a70', // Slightly darker mid wheat
        300: '#3a7268', // Slightly darker light forest
        400: '#3a7268', // Slightly darker light forest
        500: '#043d35', // Slightly darker mid forest (primary color)
        600: '#043d35', // Slightly darker mid forest
        700: '#043d35', // Slightly darker mid forest
        800: '#002623', // Dark forest
        900: '#002623', // Dark forest
        950: '#002623', // Dark forest
      },
    },
  });

  return {
    preset: ProjectTheme,
    options: {
      darkModeSelector: '.dark-mode',
    },
  };
}