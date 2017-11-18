import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import StarIcon from 'material-ui-icons/Star';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    background: theme.palette.background.paper
  },
  div: {
    width: '200px'
  }
});

const Best5 = props => {
  debugger;
  const { classes, data } = props;
  return (
    <div className={classes.div}>
      <List className={classes.root}>
        <ListItem>
          {data.map((item, i) => {
            return <ListItemText inset primary={item.key} key={i} />;
          })}
        </ListItem>
      </List>
    </div>
  );
};

Best5.PropTypes = {
  data: PropTypes.array.isRequired
};

export default withStyles(styles)(Best5);
