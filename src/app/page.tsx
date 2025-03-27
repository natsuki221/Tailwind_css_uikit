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
} from "@/components/ui";

const handleClick = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  alert("按鈕被點擊！");
};

const ComponentTestPage = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [switchOn, setSwitchOn] = React.useState(false);
  const [checked, setChecked] = React.useState(false);
  const [selectedOption, setSelectedOption] = React.useState("");

  // Range 拉桿元件
  const [rangeValue, setRangeValue] = React.useState(50);

  const handleRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRangeValue(Number(e.target.value));
  };

  return (
    <main className="p-6 space-y-8">
      <p className="text-3xl font-bold">🧪 CSS 元件測試頁面</p>

      <section>
        <Text variant="header">這是 Header 字體</Text>
        <Text variant="title">這是 Title 字體</Text>
        <Text variant="context">這是 Context 字體</Text>
        <Text variant="highlight">這是 醒目字體</Text>
        <Text variant="subtext">這是 Subtext 字體</Text>
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
          <Image src="https://picsum.photos/id/26/300/200"></Image>
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
          <Button onClick={() => setModalOpen(false)}>關閉</Button>
        </Modal>
      </section>
    </main>
  );
};

export default ComponentTestPage;
