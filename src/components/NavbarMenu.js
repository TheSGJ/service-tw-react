import React from "react";
import { Button, Navbar } from 'flowbite-react';

export default function NavbarMenu() {
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href="/">
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Service - TW
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Contact Us</Button>
        
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/navbars">
          Home
        </Navbar.Link>
        <Navbar.Link href="/navbars">About</Navbar.Link>
        <Navbar.Link href="/navbars">Services</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
