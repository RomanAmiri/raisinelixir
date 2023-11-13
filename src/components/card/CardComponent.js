import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

export default function CardComponent({
  image,
  title,
  subTitle,
  description,
  btnLeftTitle,
  btnRightTitle,
  btnLeftOnPress,
  btnRightOnPress,
  price,
  priceAfterDiscount
}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 250 }}
        image={image}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography gutterBottom variant="body" component="div">
          {subTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{btnLeftTitle}</Button>
        <Button size="small">{btnRightTitle}</Button>
      </CardActions>
    </Card>
  );
}

CardComponent.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  btnLeftTitle: PropTypes.string.isRequired,
  btnRightTitle: PropTypes.string.isRequired,
  btnLeftOnPress: PropTypes.func.isRequired,
  btnRightOnPress: PropTypes.func.isRequired,
};