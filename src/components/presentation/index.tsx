import {
  AimOutlined,
  ContainerOutlined,
  InstagramOutlined,
  ReadOutlined,
  WhatsAppOutlined,
  YoutubeOutlined,
} from '@ant-design/icons';
import { css } from '@linaria/core';
import {
  Avatar,
  Button,
  Card,
  Col,
  Divider,
  Flex,
  Grid,
  Row,
  Typography,
} from 'antd';
import Link from 'antd/es/typography/Link';

const styles = {
  presentationWrapper: css`
    max-width: 700px;
    margin: 0 auto;
  `,
  avatar: css`
    min-width: 150px;
    min-height: 150px;
    border-radius: 50%;
  `,
  nameTitle: css`
    &.ant-typography {
      margin-block: 0px;
    }
  `,
  ctaWrapper: css`
    margin-top: 2rem;
  `,
  ctaButton: css`
    padding: 2rem;
    font-size: 2rem;
    background-color: #1daa61;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2) !important;
  `,
  subtitle: css`
    &.ant-typography {
      text-align: center;
      margin-block: 0px;
    }
  `,
  card: css`
    height: 100%;
  `,
  cardIcon: css`
    font-size: 2rem;
  `,
  cardTitle: css`
    &.ant-typography {
      margin-block: 0px;
    }
  `,
  socialLinks: css`
    a {
      color: black !important;
    }
  `,
};

const Presentation = () => {
  const breakpoints = Grid.useBreakpoint();

  return (
    <Flex className={styles.presentationWrapper} gap={24} vertical>
      <Flex gap={24} vertical={!breakpoints.md}>
        <Flex gap={16} align={!breakpoints.md ? 'center' : undefined} vertical>
          <Avatar className={styles.avatar} src="/daniel.jpeg" />
          <Typography.Title className={styles.nameTitle} level={4}>
            Prof. Daniel
          </Typography.Title>
        </Flex>
        <Flex vertical>
          <Typography.Title level={2}>
            Aprenda inglês de forma rápida e fácil
          </Typography.Title>
          <Typography.Text>
            Tenha aulas particulares com uma metodologia feita pra você, focada
            em conversação e prática, para que você possa falar inglês com
            confiança e fluência!
          </Typography.Text>
          <Typography.Text>
            Não perca mais tempo, comece hoje mesmo a aprender inglês de forma
            rápida e fácil!
          </Typography.Text>
        </Flex>
      </Flex>

      <Typography.Text>
        Com mais de 5 anos de experiência, lecionando e dando aulas particulares
        de inglês para alunos de todas as idades e níveis, do básico ao
        avançado. Já ajudei centenas de alunos a alcançarem seus objetivos, seja
        para viajar, se comunicar melhor ou ter mais oportunidades de trabalho.
        Meu foco é sempre em conversação e prática, para que veja o seu próprio
        progresso em ação e se sinta mais motivado a cada dia. Minha metodologia
        é estritamente personalizada, focada em você, para que se sinta acolhido
        e motivado a aprender cada dia mais.
      </Typography.Text>

      <Flex className={styles.ctaWrapper} gap={8} vertical align="center">
        <Typography.Title className={styles.subtitle} level={2}>
          Vamos começar a aprender?
        </Typography.Title>
        <Typography.Text>Me chama pelo whatsapp:</Typography.Text>
        <Button
          type="primary"
          href="https://wa.me/5582996285705?text=Olá%20Daniel,%20gostaria%20de%20saber%20mais%20sobre%20as%20aulas%20particulares%20de%20inglês.%20Vim%20pelo%20site!"
          target="_blank"
          icon={<WhatsAppOutlined />}
          className={styles.ctaButton}
        >
          Fale comigo
        </Button>
      </Flex>

      <Divider />

      <Typography.Title className={styles.subtitle} level={2}>
        Por que ter aulas particulares?
      </Typography.Title>

      <Row gutter={[24, 24]}>
        <Col md={12} sm={24}>
          <Card className={styles.card}>
            <Flex gap={24}>
              <AimOutlined className={styles.cardIcon} />
              <Typography.Title className={styles.cardTitle} level={3}>
                Foco
              </Typography.Title>
            </Flex>
            <Divider />
            <Typography.Text>
              Aulas focadas em conversação e prática, para que você possa falar
              inglês com confiança e fluência.
            </Typography.Text>
          </Card>
        </Col>
        <Col md={12} sm={24}>
          <Card className={styles.card}>
            <Flex gap={24}>
              <ReadOutlined className={styles.cardIcon} />
              <Typography.Title className={styles.cardTitle} level={3}>
                Metodologia
              </Typography.Title>
            </Flex>
            <Divider />
            <Typography.Text>
              Metodologia personalizada, feita pra você, para que você se sinta
              acolhido e motivado a aprender cada dia mais.
            </Typography.Text>
          </Card>
        </Col>
        <Col md={12} sm={24}>
          <Card className={styles.card}>
            <Flex gap={24}>
              <ContainerOutlined className={styles.cardIcon} />
              <Typography.Title className={styles.cardTitle} level={3}>
                Conteúdo
              </Typography.Title>
            </Flex>
            <Divider />
            <Typography.Text>
              Conteúdos didáticos e atualizados, para que consiga aprender de
              forma constante e de forma leve e divertida.
            </Typography.Text>
          </Card>
        </Col>
        <Col md={12} sm={24}>
          <Card className={styles.card}>
            <Flex gap={24}>
              <ContainerOutlined className={styles.cardIcon} />
              <Typography.Title className={styles.cardTitle} level={3}>
                Avaliações
              </Typography.Title>
            </Flex>
            <Divider />
            <Typography.Text>
              Avaliações constantes para que você possa acompanhar seu progresso
              e entender seus pontos fortes e pontos a melhorar.
            </Typography.Text>
          </Card>
        </Col>
      </Row>
      <Divider />
      <Flex gap={8} align="center" vertical>
        <Typography.Text>Me siga nas redes sociais:</Typography.Text>
        <Flex className={styles.socialLinks} gap={16} justify="center">
          <Link
            href="https://www.instagram.com/danielcraetus2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramOutlined className={styles.cardIcon} />
          </Link>
          <Link
            href="https://www.youtube.com/@TioDoIngl%C3%AAsDan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <YoutubeOutlined className={styles.cardIcon} />
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Presentation;
