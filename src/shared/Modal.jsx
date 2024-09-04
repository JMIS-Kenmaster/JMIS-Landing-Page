import React, { useState } from "react";
import ServiceModal from "./ServiceModal";
import {
  Box,
  Button,
  MenuItem,
  Select,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    basic: {
      black: "#000000",
      blue: "#0000E8",
      red: "#E60000",
      contrastText: "#FFFFFF",
    },
  },
});

const Modal = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedService, setSelectedService] = useState("Computers");

  const computerServiceItems = [
    {
      service: "Computer Repair Labor",
      description: "Basic labor for Desktop/Laptop service",
      price: 60,
    },
    {
      service: "Laptop LCD Replacement",
      description: "Basic labor for Desktop/Laptop screen replacement",
      price: 90,
    },
    {
      service: "Motherboard Replacement",
      description: "Basic labor for motherboard replacement",
      price: 80,
    },
    {
      service: "HDD Upgrade",
      description: "Basic labor for hard drive upgrade",
      price: 60,
    },
    {
      service: "Laptop Keyboard Replacement",
      description: "Basic labor for laptop keyboard replacement",
      price: 60,
    },
    {
      service: "Virus Removal",
      description: "Complete virus and malware removal service",
      price: 70,
    },
    {
      service: "Data Recovery",
      description: "Recovery of lost or deleted data",
      price: 100,
    },
    {
      service: "Software Installation",
      description: "Installation of operating systems or software",
      price: 50,
    },
    {
      service: "RAM Upgrade",
      description: "Basic labor for RAM upgrade",
      price: 40,
    },
    {
      service: "Power Supply Replacement",
      description: "Basic labor for power supply replacement",
      price: 70,
    },
    {
      service: "Fan Replacement",
      description: "Replacement of CPU or case fan",
      price: 30,
    },
    {
      service: "Laptop DC Jack Repair",
      description: "Repair of laptop DC power jack",
      price: 85,
    },
    {
      service: "Screen Cleaning",
      description: "Professional screen cleaning service",
      price: 20,
    },
    {
      service: "Thermal Paste Replacement",
      description: "Replacement of thermal paste on CPU/GPU",
      price: 30,
    },
    {
      service: "Custom PC Build",
      description: "Assembly of custom-built PCs",
      price: 120,
    },
    {
      service: "Networking Setup",
      description: "Setup and configuration of home/office network",
      price: 100,
    },
    {
      service: "Printer Setup",
      description: "Installation and setup of printer",
      price: 40,
    },
    {
      service: "Battery Replacement",
      description: "Replacement of laptop battery",
      price: 50,
    },
    {
      service: "Operating System Reinstallation",
      description: "Complete reinstallation of operating system",
      price: 80,
    },
    {
      service: "Backup Solutions",
      description: "Setup and configuration of backup solutions",
      price: 60,
    },
  ];

  const consoleServiceItems = [
    {
      service: "Nintendo Switch Joy-Con Repair",
      description: "Repair or replace faulty Joy-Con controllers",
      price: 40,
    },
    {
      service: "Nintendo Switch Screen Replacement",
      description: "Replace cracked or damaged Nintendo Switch screen",
      price: 80,
    },
    {
      service: "Nintendo Switch Charging Port Repair",
      description: "Repair or replace faulty charging port",
      price: 60,
    },
    {
      service: "Sony PlayStation 4/5 HDMI Port Replacement",
      description: "Replace damaged HDMI port on PlayStation 4/5",
      price: 70,
    },
    {
      service: "Sony PlayStation 4/5 Disc Drive Repair",
      description: "Repair or replace faulty disc drive",
      price: 90,
    },
    {
      service: "Sony PlayStation 4/5 Overheating Issue Repair",
      description: "Clean and reapply thermal paste to prevent overheating",
      price: 50,
    },
    {
      service: "Microsoft Xbox One/Series X HDMI Port Replacement",
      description: "Replace damaged HDMI port on Xbox One/Series X",
      price: 70,
    },
    {
      service: "Microsoft Xbox One/Series X Disc Drive Repair",
      description: "Repair or replace faulty disc drive",
      price: 90,
    },
    {
      service: "Microsoft Xbox One/Series X Overheating Issue Repair",
      description: "Clean and reapply thermal paste to prevent overheating",
      price: 50,
    },
    {
      service: "Console Data Transfer",
      description: "Transfer data between old and new consoles",
      price: 40,
    },
    {
      service: "Console Firmware Update",
      description: "Update console firmware to the latest version",
      price: 30,
    },
    {
      service: "Controller Button/Sticks Repair",
      description: "Repair or replace malfunctioning buttons or analog sticks",
      price: 35,
    },
    {
      service: "Internal Cleaning Service",
      description: "Thorough internal cleaning to remove dust and debris",
      price: 45,
    },
    {
      service: "Nintendo Switch Battery Replacement",
      description: "Replace faulty or degraded Nintendo Switch battery",
      price: 60,
    },
    {
      service: "Sony PlayStation 4/5 Hard Drive Upgrade",
      description: "Upgrade hard drive to a larger capacity or SSD",
      price: 80,
    },
    {
      service: "Microsoft Xbox One/Series X Hard Drive Upgrade",
      description: "Upgrade hard drive to a larger capacity or SSD",
      price: 80,
    },
    {
      service: "Nintendo Switch Dock Repair",
      description: "Repair or replace faulty Nintendo Switch dock",
      price: 50,
    },
    {
      service: "Sony PlayStation VR Setup",
      description: "Setup and configure PlayStation VR system",
      price: 40,
    },
    {
      service: "Microsoft Xbox Kinect Setup",
      description: "Setup and configure Xbox Kinect system",
      price: 40,
    },
  ];

  const networkingServiceItems = [
    {
      service: "Home Network Setup",
      description:
        "Setup and configuration of a home network, including router and devices",
      price: 100,
    },
    {
      service: "Wi-Fi Range Extension",
      description:
        "Extend Wi-Fi coverage in your home with extenders or mesh systems",
      price: 80,
    },
    {
      service: "Network Troubleshooting",
      description: "Identify and resolve network connectivity issues",
      price: 60,
    },
    {
      service: "Router Configuration",
      description: "Setup and secure your router with custom configurations",
      price: 50,
    },
    {
      service: "Network Security Setup",
      description: "Implement security measures to protect your network",
      price: 70,
    },
    {
      service: "VPN Setup",
      description: "Setup and configure a VPN for secure remote access",
      price: 60,
    },
    {
      service: "Smart Home Device Integration",
      description: "Connect and configure smart home devices on your network",
      price: 75,
    },
    {
      service: "Network Cable Installation",
      description:
        "Install and organize network cables for optimal performance",
      price: 100,
    },
    {
      service: "Business Network Setup",
      description:
        "Design and implement a network for small to medium-sized businesses",
      price: 200,
    },
    {
      service: "Server Setup and Maintenance",
      description: "Setup and maintain network servers for businesses",
      price: 150,
    },
    {
      service: "Firewall Configuration",
      description: "Setup and configure firewall for enhanced network security",
      price: 80,
    },
    {
      service: "Bandwidth Optimization",
      description:
        "Optimize network settings to improve bandwidth and reduce latency",
      price: 70,
    },
    {
      service: "Cloud Service Integration",
      description: "Setup and integrate cloud services with your network",
      price: 90,
    },
    {
      service: "Guest Network Setup",
      description: "Create and configure a separate guest network",
      price: 50,
    },
    {
      service: "Network Printer Setup",
      description: "Setup and configure printers on the network",
      price: 40,
    },
    {
      service: "VoIP Phone System Setup",
      description:
        "Install and configure VoIP phone systems for home or business",
      price: 120,
    },
    {
      service: "NAS Configuration",
      description:
        "Setup and configure Network Attached Storage for backups and file sharing",
      price: 90,
    },
    {
      service: "Network Monitoring",
      description: "Implement and configure network monitoring tools",
      price: 100,
    },
    {
      service: "Network Audit",
      description:
        "Comprehensive audit of your network for security and performance issues",
      price: 110,
    },
  ];

  const handleServiceSelection = (event) => {
    setSelectedService(event.target.value);
  };

  let serviceItems;
  switch (selectedService) {
    case "Computers":
      serviceItems = computerServiceItems;
      break;
    case "Video Games":
      serviceItems = consoleServiceItems;
      break;
    case "Network":
      serviceItems = networkingServiceItems;
      break;
    default:
      serviceItems = [];
  }

  return (
    <ThemeProvider theme={theme}>
      <Box className="p-1">
        <Typography variant="h4" component="h1" gutterBottom>
          Select a Category
        </Typography>
        <Select
          value={selectedService}
          onChange={handleServiceSelection}
          displayEmpty
          variant="outlined"
          sx={{ mb: 4, minWidth: 150, mr: 2 }}
        >
          <MenuItem value="Computers">Computers</MenuItem>
          <MenuItem value="Video Games">Video Games</MenuItem>
          <MenuItem value="Network">Network</MenuItem>
        </Select>
        <Button
          style={{ height: "55px", width: "150px" }}
          sx={{ bgcolor: "basic.black" }}
          variant="contained"
          onClick={() => setIsModalVisible(true)}
        >
          Show Services
        </Button>
        <ServiceModal
          isVisible={isModalVisible}
          onClose={() => setIsModalVisible(false)}
          selectedService={selectedService}
          handleServiceSelection={handleServiceSelection}
          serviceItems={serviceItems}
        />
      </Box>
    </ThemeProvider>
  );
};

export default Modal;
