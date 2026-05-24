import { Button, Flex, Form, Input, Select } from 'antd';
import { useForm } from 'antd/es/form/Form';

const ContactForm = () => {
  const [form] = useForm();

  return (
    <Form form={form} layout="vertical">
      <Form.Item
        label="Nome"
        rules={[{ required: true, message: 'Por favor, insira seu nome!' }]}
        required
      >
        <Input placeholder="Digite seu nome" />
      </Form.Item>
      <Form.Item
        label="Telefone"
        rules={[{ required: true, message: 'Por favor, insira seu telefone!' }]}
        required
      >
        <Input placeholder="Digite seu telefone" />
      </Form.Item>
      <Form.Item
        label="Email"
        rules={[{ required: true, message: 'Por favor, insira seu email!' }]}
        required
      >
        <Input placeholder="Digite seu email" />
      </Form.Item>
      <Form.Item
        label="Motivação"
        rules={[
          { required: true, message: 'Por favor, insira sua motivação!' },
        ]}
        required
      >
        <Select
          placeholder="Selecione sua motivação"
          options={[
            { value: 'viagem', label: 'Viajar' },
            { value: 'trabalho', label: 'Trabalho' },
            { value: 'comunicacao', label: 'Comunicação' },
            { value: 'outros', label: 'Outros' },
          ]}
        />
      </Form.Item>
      <Flex justify="flex-end">
        <Button type="primary">Enviar</Button>
      </Flex>
    </Form>
  );
};

export default ContactForm;
