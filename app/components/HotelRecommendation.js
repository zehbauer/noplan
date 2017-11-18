import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import ThumbDown from 'material-ui-icons/ThumbDown';

const styles = {
  card: {
    maxWidth: 345
  },
  media: {
    height: 200
  }
};

const HotelRecommendation = props => {
  const { classes, data } = props;
  return (
    <div>
      <Card className={classes.card} key={data.hotel_id}>
        <CardMedia className={classes.media} image={data['image_url']} />
        <CardContent>
          <Typography type="headline" component="h2">
            {data.name ? `${data.name}` : ''}
          </Typography>
          <Typography component="p">
            {data.street && data.city ? `${data.street} in ${data.city}` : ''}
          </Typography>
          <Typography component="p">
            {data.price && data.currency
              ? `Price : ${data.price} ${data.currency}`
              : ''}
          </Typography>
          <Typography component="p">
            {data.rating_average
              ? `Average rating: ${data.rating_average}`
              : ''}
          </Typography>
          <Typography component="p">
            {data.discount && data.discount > 0
              ? `Available discount: ${data.discount}`
              : ''}
          </Typography>
        </CardContent>
        <CardActions>
          <Button raised color="primary" className={classes.button}>
            Book
          </Button>
          <Button raised color="accent" className={classes.button}>
            <ThumbDown /> Not Interested
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

HotelRecommendation.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.shape({
    name: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    street: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired
  })
};

export default withStyles(styles)(HotelRecommendation);
