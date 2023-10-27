import { Form, Input, InputNumber } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { message, Upload, Button } from "antd";
import style from "./Form.module.css";
import { useState } from "react";

export default function Formdata() {
  const [inputevalue, setinputevalue] = useState([""]);
  console.log(inputevalue);

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  const validateMessages = {
    required: "{label} is required!",
    types: {
      email: "{label} is not a valid email!",
      number: "{label} is not a valid number!",
    },
    number: {
      range: "{label} must be between {min} and {max}",
    },
  };
  const onFinish = (values) => {
    console.log(values.photos.file);
    const image = values.photos.fileList[0];
    const arr = [];
    arr.push(image);
    var blob = new Blob(arr, { type: "text/plain" });
    const result = URL.createObjectURL(blob);

    values["img"] = result;
    const newdata = (value) => [...value, values];

    setinputevalue(newdata);
  };

  const props = {
    beforeUpload: (file) => {
      const isPNG = file.type === "image/png";
      if (!isPNG) {
        message.error(`${file.name} is not a png file`);
      }
      return isPNG || Upload.LIST_IGNORE;
    },
    onChange: (info) => {
      console.log(info.fileList);
    },
  };

  return (
    <>
      <div className={style.fullbody}>
        <h1 className={style.leter}>
          Amazon <span>seller centrel india</span>
        </h1>
        <Form
          className={style.formdesign}
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          style={{
            maxWidth: 600,
          }}
          validateMessages={validateMessages}
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                type: "email",
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="age"
            label="Age"
            rules={[
              {
                type: "number",
                min: 0,
                max: 99,
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item name="self" label="Tell about your self">
            <Input />
          </Form.Item>
          <div className={style.flex}>
            <Form.Item name="photos">
              <Upload {...props}>
                <Button icon={<UploadOutlined />}>Upload png only</Button>
              </Upload>
            </Form.Item>
            <Form.Item
              wrapperCol={{
                ...layout.wrapperCol,
                offset: 8,
              }}
            >
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </div>
        </Form>
      </div>
      <Ui Ui={inputevalue}></Ui>;
    </>
  );
}

function Ui({ Ui }) {
  console.log(Ui);

  return (
    <>
      <div>
        {Ui.length &&
          Ui.map((v) => {
            return (
              <div>
                <p>
                  <strong>{v.name}</strong>
                </p>
                <p>{v.email}</p>
                <p>{v.age}</p>
                <p>{v.self}</p>

                <img src={v.img} alt={v.img} key={v.blob}></img>
              </div>
            );
          })}
      </div>
    </>
  );
}
