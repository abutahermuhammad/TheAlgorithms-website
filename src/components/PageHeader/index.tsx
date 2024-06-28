import React from 'react';
import classes from "./ph.module.css";
import Container from '../ui/container';

const PageHeader = () => {
  return (
    <section className={classes.section}>
      <div className={classes.background}></div>
      <div className={classes.content}>
        <Container class name={classes.container}>
          <h1 className={classes.title}>Find the best algorithms</h1>
          <p className={classes.description}>We have 300+ algorithms in 20+ programming languages</p>
        </Container>
      </div>
    </section >
  )
}

export default PageHeader
