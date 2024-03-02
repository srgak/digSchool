export const getMenuSettingsUrl = (role: string): string => {
  switch (role) {
    case 'pupil':
      return '/assets/data/menu-data-pupil.json';
    case 'teacher':
      return '/assets/data/menu-data-teacher.json';
    default:
      return '/assets/data/menu-data-admin.json';
  }
};
