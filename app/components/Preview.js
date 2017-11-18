import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { IconButton } from 'material-ui/IconButton';
import RemoveCircle from 'material-ui-icons/RemoveCircle';
import InfoIcon from 'material-ui-icons/RemoveCircle';
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    background: theme.palette.background.paper
  },
  gridList: {
    transform: 'translateZ(0)'
  }
});

const TitlebarGridList = props => {
  const { classes, pictures, onPictureRemove } = props;
  return (
    <div className={classes.container}>
      <GridList className={classes.gridList} cols={4}>
        <GridListTile key="Subheader" style={{ height: 'auto' }} />
        {pictures.map((item, index) => (
          <GridListTile key={index}>
            <img src={item[0].preview} />
            <GridListTileBar title={item[0].name} />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
};

TitlebarGridList.propTypes = {
  classes: PropTypes.object.isRequired,
  onPictureRemove: PropTypes.func.isRequired
};

export default withStyles(styles)(TitlebarGridList);
