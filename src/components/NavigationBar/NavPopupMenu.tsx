"use client";
import { SvgIconComponent } from "@mui/icons-material";
import Styles from "./navbar.module.css";
import { Button, Menu, MenuItem } from "@mui/material";
import React, { useEffect, useId } from "react";


export type TNavPopupMenuOption = {
  label: string;
  value?: string;
  icon?: SvgIconComponent | string;
};

/**
 * Renders a theme selector component.
 *
 * @param {Object} props - The props for the component.
 * @param {(theme: string) => void} props.onSelect - The function to call when a theme is selected.
 * @param {string} props.title - The title of the theme selector.
 * @param {React.ReactElement} props.icon - The icon to display next to the title.
 * @param {TNavPopupMenuOption[]} props.options - The options to display in the menu.
 * @param {React.HTMLAttributes<HTMLDivElement>} [props.rest] - Additional props to pass to the div element.
 * @returns {JSX.Element} - The rendered theme selector component.
 */
export default function NavPopupMenu({
  onSelect,
  title,
  icon,
  options,
  ...rest
}: {
  onSelect: (theme: string) => void;
  title: string;
  icon: React.ReactElement;
  options: TNavPopupMenuOption[];
  rest?: React.HTMLAttributes<HTMLDivElement>;
}): JSX.Element {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const id = useId() ?? '';

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (option: TNavPopupMenuOption) => {
    handleClose();
    console.log(option);
    onSelect(option.value || option.label);
  };

  return (
    <div className={Styles.themeSelector} {...rest}>
      <Button
        variant="text"
        color="inherit"
        size="small"
        startIcon={icon}
        aria-controls={open ? id : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {title}
      </Button>
      <Menu
        id={id}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {options.map((option) => (
          <MenuItem
            key={option.value || option.label}
            onClick={() => handleMenuItemClick(option)}
            className={Styles.menuItem}
          >
            {/**
             * Item Icon
             * - If the icon is a string, it will be rendered as an image.
             * - If the icon is a component, it will be rendered as the component.
             */}
            {typeof option.icon === "string" ? (
              <img
                src={option.icon}
                alt={option.label}
                className={Styles.themeIcon}
              />
            ) : (
              // @ts-ignore
              <option.icon className={Styles.themeIcon} />
            )}
            <span className={Styles.themeName}>{option.label}</span>
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}

