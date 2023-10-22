import * as React from "react";
import { Button, Modal, Box, Typography } from "@mui/material";

interface ModalProps {
    open: boolean;
    onClose: () => void;
}

const ReusableModal: React.FC<ModalProps> = ({ open, onClose }) => {
    return (
        <Modal open={open} onClose={onClose}>
            <Box
                sx={{
                    position: "absolute",
                    width: "60%",
                    bgcolor: "background.paper",
                    border: "none",
                    boxShadow: 24,
                    p: 4,
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}
            >
                <Typography variant="h6" component="h2">
                    Modal Title
                </Typography>
                <Typography variant="body2" component="div">
                    This is a basic modal dialog.
                </Typography>
                <Button onClick={onClose}>Close</Button>
            </Box>
        </Modal>
    );
};

export default ReusableModal;
