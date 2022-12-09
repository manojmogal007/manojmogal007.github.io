import { Text,Button,Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input, Textarea, useDisclosure } from "@chakra-ui/react"
import React from "react"
function EmailDrawer() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  
    return (
      <div >
        <Button ref={btnRef} colorScheme='teal' onClick={onOpen}>
          Send message
        </Button>
        <Drawer
          isOpen={isOpen}
          placement='right'
          onClose={onClose}
          finalFocusRef={btnRef}
          
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Message me</DrawerHeader>
  
            <DrawerBody>
              <Input mt={6} placeholder="Name" />
              <Input mt={6} placeholder="Email" />
              <Textarea mt={6} placeholder="Type message here......"/>
            </DrawerBody>
  
            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Send</Button>
            </DrawerFooter>
          </DrawerContent>
          
        </Drawer>
      </div>
    )
  }
  export default EmailDrawer