import React, { useContext, useState } from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    DropdownItem,
    DropdownTrigger,
    Dropdown,
    DropdownMenu,
    Input,
    Button,
    useDisclosure
} from "@nextui-org/react";
import { Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { AiFillCaretDown } from "react-icons/ai";
import { BiSearchAlt } from "react-icons/bi";
import DropDown from "./DropDown";
import Context from "../../Context/Context";
import SetCookieUser, { LoggedInDetails } from "../../Context/SetCookieUser";
import { ChangeNameModal } from "./ChangeNameModal";

export default function NavBar() {
    const { setSearchValue, User, SetUser, Cart } = useContext(Context);
    const navigate = useNavigate();
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <div>
            <ChangeNameModal onOpenChange={onOpenChange} isOpen={isOpen} onOpen={onOpen} name={User.Name} />
            <Navbar shouldHideOnScroll isBordered isBlurred={false} maxWidth="full" className="z-[999] px-6">
                <div className="flex w-full justify-between items-center">
                    {/* Left side - E-Commerce */}
                    <div className="flex items-center gap-6">
                        <NavbarBrand className="text-xl font-bold whitespace-nowrap">E-Commerce</NavbarBrand>
                    </div>

                    {/* Centered Navbar Items */}
                    <NavbarContent className="flex-grow flex justify-center items-center gap-6 w-full">
                        <NavbarItem>
                            <Link to="/" className="navItem">Home</Link>
                        </NavbarItem>
                        <DropDown navigate={navigate} />
                        <NavbarItem>
                            <Link to="/All-Products" className="navItem">Products</Link>
                        </NavbarItem>
                        <NavbarItem>
                            <Link to="/AboutUs" className="navItem">About Us</Link>
                        </NavbarItem>
                    </NavbarContent>

                    {/* Right side - Search, Cart, Profile */}
                    <div className="flex items-end gap-4">
                        <Input
                            className="w-96 bg-gray-100 rounded-full px-4" // Increased width
                            placeholder="Search for products..."
                            startContent={<BiSearchAlt className="text-gray-500" />}
                        />
                        <TfiShoppingCartFull className="text-xl cursor-pointer" />
                        {User.IsLoggedIn ? (
                            <Dropdown placement="bottom-end">
                                <DropdownTrigger>
                                    <Button color="primary" className="text-[14px] p-[8px] h-fit"
                                        endContent={<AiFillCaretDown />}>{'Profile'}</Button>
                                </DropdownTrigger>
                                <DropdownMenu aria-label="Profile Actions" variant="shadow" onAction={(key) => {
                                    if (key === "profile") return;
                                    if (key === "Profile") {
                                        onOpen();
                                        return;
                                    }
                                    navigate(key);
                                }}>
                                    <DropdownItem key="profile" className="h-14 gap-2">
                                        <p className="font-semibold">Signed in as</p>
                                        <p className="font-semibold">{User.Name}</p>
                                    </DropdownItem>
                                    <DropdownItem key="Profile">Change Name</DropdownItem>
                                    <DropdownItem key="orders">Your Orders</DropdownItem>
                                    <DropdownItem key="Help">Help & Feedback</DropdownItem>
                                    {User.Role === "admin" && <DropdownItem key="/Admin">Admin Page</DropdownItem>}
                                    <DropdownItem key="/" color="danger" onClick={() => {
                                        SetCookieUser("", "", "", "", "", "");
                                        SetUser(LoggedInDetails());
                                        navigate("/"); 
                                    }}>Log Out</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        ) : (
                            <Button color="primary" onPress={() => navigate("/Login")}>Login</Button>
                        )}
                    </div>
                </div>
            </Navbar>
        </div>
    );
}
