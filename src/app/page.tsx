"use client";

import React from "react";
import {
  Button,
  Input,
  Card,
  Modal,
  Badge,
  Switch,
  Checkbox,
  Select,
  TextArea,
  Text,
  Range,
  Image,
  Alert,
  Slider,
  JapaneseText,
} from "@/components/ui";

const ComponentTestPage = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [switchOn, setSwitchOn] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState("");
  const [showAlert, setShowAlert] = React.useState(false);

  const handleClick = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setShowAlert(true);
  };

  // Range 拉桿元件
  const [rangeValue, setRangeValue] = React.useState(50);

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRangeValue(Number(e.target.value));
  };

  // Slider 輪播元件
  const slides = [
    <Card key="slide-1" className="space-y-4">
      <Image src="https://picsum.photos/id/26/300/200" alt="Fake Photo"></Image>
      <Text variant="highlight">這是一個簡單的卡片元件。</Text>
    </Card>,
    <Card key="slide-2" className="space-y-4">
      <Image src="https://picsum.photos/id/27/300/200" alt="Fake Photo"></Image>
      <Text variant="highlight">這是一個簡單的卡片元件。</Text>
    </Card>,
    <Card key="slide-3" className="space-y-4">
      <Image src="https://picsum.photos/id/28/300/200" alt="Fake Photo"></Image>
      <Text variant="highlight">這是一個簡單的卡片元件。</Text>
    </Card>,
  ];

  return (
    <main className="p-6 space-y-8">
      {showAlert && (
        <Alert variant="info" onClose={() => setShowAlert(false)}>
          <p className="text-lg font-medium">按鈕被點擊！</p>
        </Alert>
      )}
      <Text variant="header" className="text-center">🧪 UI 元件測試頁面</Text>

      <section>
        <Text variant="header">這是 Header 字體</Text>
        <Text variant="title">這是 Title 字體</Text>
        <Text variant="context">這是 Context 字體</Text>
        <Text variant="highlight">這是 醒目字體</Text>
        <Text variant="subtext">這是 Subtext 字體</Text>
        <JapaneseText variant="context">これは日本語のフォントです。</JapaneseText>
      </section>

      <section>
        <Text variant="title">Button</Text>
        <div className="flex gap-3">
          <Button onClick={handleClick}>點擊我</Button>
          <Button variant="warning" onClick={handleClick}>
            點擊我
          </Button>
          <Button variant="cancel" onClick={handleClick}>
            點擊我
          </Button>
        </div>
      </section>

      <section>
        <Text variant="title">Input</Text>
        <div className="grid grid-cols-2 gap-2">
          <Input placeholder="請輸入文字..." />
          <div className="content-center">
            <Text variant="subtext" className="text-center">
              Range拉桿: {rangeValue}
            </Text>
            <Range
              min={0}
              max={100}
              value={rangeValue}
              onChange={handleRangeChange}
            />
          </div>
        </div>
      </section>

      <section>
        <Text variant="title">TextArea</Text>
        <TextArea placeholder="這是一個多行輸入框..." />
      </section>

      <section>
        <Text variant="title">Card</Text>
        <Card className="space-y-4">
          <Image
            src="https://picsum.photos/id/26/300/200"
            alt="Fake Photo"
          ></Image>
          <Text variant="highlight">這是一個簡單的卡片元件。</Text>
        </Card>
      </section>

      <section>
        <Text variant="title">Badge</Text>
        <div className="flex gap-2">
          <Badge>預設</Badge>
          <Badge variant="success">成功</Badge>
          <Badge variant="warning">警告</Badge>
        </div>
      </section>

      <section>
        <Text variant="title">Switch</Text>
        <Switch checked={switchOn} onChange={setSwitchOn} />
      </section>

      <section>
        <Text variant="title">Checkbox</Text>
        <Checkbox
          checked={checked}
          onChange={setChecked}
          label="我同意服務條款"
        />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Select</h2>
        <Select
          value={selectedOption}
          onChange={setSelectedOption}
          options={[
            { label: "選項一", value: "one" },
            { label: "選項二", value: "two" },
          ]}
        />
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Modal</h2>
        <Button onClick={() => setModalOpen(true)}>打開 Modal</Button>
        <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
          <p>這是模態視窗的內容。</p>
        </Modal>
      </section>

      <section>
        <Text variant="title">Slider</Text>
        <Slider
          slides={slides}
          slidesToShow={1}
          autoPlay
          autoPlayInterval={4000}
          enableDrag
          dynamicHeight
          className="mx-auto max-w-4xl"
        />
      </section>
      <br />
    </main>
  );
};

export default ComponentTestPage;
