import PGWallpaper from "../assets/logo-wallpaper.jpg";

export const containerStyles = {
  backgroundImage: `url(${PGWallpaper})`,
  backgroundSize: "cover",
  heigth: "100%",
  backgroundRepeat: "no-repeat",
  backgroundAttachment: "fixed",
};

export const contentStyles = {
  backgroundColor: "rgba(41,114,171,0.9)",
  border: "2px solid rgb(11,12,169)",
  padding: "20px",
  borderRadius: "8px",
};

export const containerBorder = {
  backgroundColor: "rgba(255,255,255,0.5)",
  border: "2px solid rgb(11,12,169)",
  borderRadius: "8px",
  color: "rgb(11,12,125)",
  fontSize: "3svh",
  fontWeight: "bolder",
};

export const centerInputs = {width: '75%', margin: 'auto' } 