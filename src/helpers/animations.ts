export const buttonDollarizeAnimation = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(17, 0, 174)",
  }
}

export const buttonFooterVariants = {
  hover: {
    scale: 1.1,
    // textShadow: "0px 0px 8px rgba(36, 36, 36, 0.772)",
    boxShadow: "0px 0px 20px rgb(255,255,255)",
  }
}

export const buttonNavbarVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
  }
}

export const buttonAccountVariants = {
  hover: {
    scale: 1.1,
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
  }
}

export const titleServicesLeftVariants = {
  hidden: {
    opacity: 0,
    x: -200,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.8,
      duration: 0.5,
      type: "spring",
      stiffness: 120,
    }
  },
}

export const titleServicesRightVariants = {
  hidden: {
    opacity: 0,
    x: 200,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.8,
      duration: 0.5,
      type: "spring",
      stiffness: 120,
    }
  },
}

export const titleServicesCenterVariants = {
  hidden: {
    opacity: 0,
    y: -200,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.8,
      duration: 0.5,
      type: "spring",
      stiffness: 120,
    }
  },
}

