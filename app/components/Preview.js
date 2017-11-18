import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
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
    width: 500,
    height: 450
  }
});
const TitlebarGridList = props => {
  const { classes, pictures } = props;
  return (
    <div className={classes.container}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }} />
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
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TitlebarGridList);
