import React, { useState } from "react";
import {
  Box,
  Typography,
  Modal as MuiModal,
  MenuItem,
  Select,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  useMediaQuery,
  useTheme,
} from "@mui/material";

function ServiceModal({
  isVisible,
  onClose,
  selectedService,
  handleServiceSelection,
  serviceItems,
}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isMedium = useMediaQuery(theme.breakpoints.between("sm", "md"));
  const isLarge = useMediaQuery(theme.breakpoints.up("md"));

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: isMobile ? "90%" : isMedium ? "70%" : isLarge ? "60%" : "50%",
    maxHeight: "80vh",
    overflowY: "auto",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  const itemsPerPage = 5;
  const [page, setPage] = useState(1);
  const pageCount = Math.ceil(serviceItems.length / itemsPerPage);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  const paginatedItems = serviceItems.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );

  return (
    <MuiModal
      open={isVisible}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Service Categories
        </Typography>
        <Select
          value={selectedService}
          onChange={handleServiceSelection}
          displayEmpty
          variant="outlined"
          fullWidth
          sx={{ mb: 4 }}
        >
          <MenuItem value="Computers">Computers</MenuItem>
          <MenuItem value="Video Games">Video Games</MenuItem>
          <MenuItem value="Network">Network</MenuItem>
        </Select>
        <TableContainer component={Paper}>
          <Table aria-label="service items table">
            <TableHead>
              <TableRow>
                <TableCell>Service</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Price</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedItems.map((item, index) => (
                <TableRow key={index}>
                  <TableCell fontWeight="bold">{item.service}</TableCell>
                  <TableCell>
                    <Typography variant="body2">{item.description}</Typography>
                  </TableCell>
                  <TableCell>
                    <Typography variant="body2">${item.price}</Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Pagination
          count={pageCount}
          page={page}
          onChange={handleChangePage}
          sx={{ mt: 2, display: "flex", justifyContent: "center" }}
        />
      </Box>
    </MuiModal>
  );
}

export default ServiceModal;
