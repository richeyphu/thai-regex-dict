import React from "react";
import {
  Button,
  Text,
  Link,
  HStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { ExternalLink, Info } from "react-feather";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

const AboutModal = (props: Props) => {
  const { isOpen, onClose } = props;

  return (
    <Modal onClose={onClose} isOpen={isOpen} size="lg" isCentered>
      <ModalOverlay />
      <ModalContent width={{ base: "90%" }}>
        <ModalHeader>
          <HStack>
            <Info />
            <Text>เกี่ยวกับ</Text>
          </HStack>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>
            <b>Thai Regex Dict</b> คือ
            พจนานุกรมโอเพนซอร์สที่ใช้สำหรับค้นหาคำศัพท์ภาษาไทยที่มีรูปแบบตามนิพจน์ปรกติ
            (Regular Expression)
          </Text>
          <Text>
            รองรับการทำงานทั้งในรูปเว็บไซต์และ PWA (Progressive Web App)
          </Text>
          <Link
            color="teal.500"
            href="https://github.com/richeyphu/thai-regex-dict"
            isExternal
          >
            <HStack mt={2} spacing={1}>
              <Text>เรียนรู้เพิ่มเติม</Text>
              <ExternalLink size={18} />
            </HStack>
          </Link>
          {/* <Link
            color="teal.500"
            href="https://github.com/richeyphu/thai-regex-dict"
            isExternal
          >
            <HStack mt={2} spacing={1}>
              <Text>GitHub</Text>
              <Icon.GitHub size={18} />
            </HStack>
          </Link> */}
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>ปิด</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default AboutModal;
