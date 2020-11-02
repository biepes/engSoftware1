import Link from "@material-ui/core/Link";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import { Assignment, Home } from "@material-ui/icons";
import React from "react";

export const mainListItems = (exit) => {
  return (
    <div>
      <Link href="#/app/home">
        <ListItem button>
          <ListItemIcon>
            <Home />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
      </Link>
      <Link href="#/app/questionario">
        <ListItem button>
          <ListItemIcon>
            <Assignment />
          </ListItemIcon>
          <ListItemText primary="Questionario" />
        </ListItem>
      </Link>
      <Link href="#/app/casosproximos">
        <ListItem button>
          <ListItemIcon>
            <Assignment />
          </ListItemIcon>
          <ListItemText primary="Casos Próximos" />
        </ListItem>
      </Link>
      <Link href="#/app/casosregiao">
        <ListItem button>
          <ListItemIcon>
            <Assignment />
          </ListItemIcon>
          <ListItemText primary="Casos Por Região" />
        </ListItem>
      </Link>
      <Link href="#/">
        <ListItem button onClick={exit}>
          <ListItemIcon>
            <Assignment />
          </ListItemIcon>
          <ListItemText primary="exit" />
        </ListItem>
      </Link>
    </div>
  );
};

export const secondaryListItems = (
  <div>
    <ListSubheader inset></ListSubheader>
  </div>
);
