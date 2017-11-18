import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { GridList, GridListTile, GridListTileBar } from 'material-ui/GridList';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    // justifyContent: 'space-around',
    overflow: 'hidden'
  },
  gridList: {
    // flexWrap: 'nowrap',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)'
  }
});
const TitlebarGridList = props => {
  const { classes, pictures, onPictureRemove } = props;
  return (
    <div className={classes.container}>
      <GridList className={classes.gridList}>
        <GridListTile key="Subheader" cols={4} style={{ height: 'auto' }} />
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
