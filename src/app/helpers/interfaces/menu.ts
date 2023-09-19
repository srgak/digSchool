export type MenuItem = {
  name: string;
  link: string;
  img: string;
};
export type MenuData = MenuItem[];
export type MenuSettings = {
  [role: string]: MenuData;
}