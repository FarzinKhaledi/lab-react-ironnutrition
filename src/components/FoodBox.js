import React from 'react';
import { Card, Col, Button } from 'antd';
import '../App.css';

const FoodBox = (props) => {
  const { name, calories, image, servings } = props.food;
  const { deleteFood, index } = props;
  return (
    <Col>
      <Card
        className="container"
        title={name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={image} height={60} alt="food" />
        <p>Calories: {calories}</p>
        <p>Servings: {servings}</p>
        <p>
          <b>
            Total Calories: {calories} * {servings}{' '}
          </b>{' '}
          kcal
        </p>
        <Button id="del-Btn" onClick={() => deleteFood(index)} type="primary">
          {' '}
          Delete{' '}
        </Button>
      </Card>
    </Col>
  );
};

export default FoodBox;
