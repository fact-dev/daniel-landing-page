import { Card, Flex, Typography } from 'antd';
import ContactForm from './components/contact-form';
import { css } from '@linaria/core';

const styles = {
  contact: css`
    align-self: center;
  `,
  card: css`
    width: 500px;
    max-width: 500px;
  `,
  title: css`
    margin-top: 0px;
  `,
};

const Contact = () => {
  return (
    <Flex
      className={styles.contact}
      flex={1}
      align="center"
      justify="flex-start"
      vertical
    >
      <Card className={styles.card}>
        <Typography.Title className={styles.title}>
          Entre em contato
        </Typography.Title>
        <ContactForm />
      </Card>
    </Flex>
  );
};

export default Contact;
