import { Alert, Box, IconButton } from "@mui/material";

// icons
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const options = [
  { name: "edit", icon: <EditIcon />, action: () => console.log("edit") },
  {
    name: "delete",
    icon: <DeleteIcon sx={{ color: "tomato" }} />,
    action: () => console.log("delete"),
  },
];

const columns = [
  { field: "id", headerName: "ID", flex: 0.4 },
  { field: "name", headerName: "Nombre Completo", flex: 1 },
  { field: "interes", headerName: "Área de Interés", flex: 1 },
  { field: "enterprice", headerName: "Empresa", flex: 1 },
  { field: "phone", headerName: "Telefono", flex: 1 },
  {
    field: "state",
    headerName: "Estado de Contacto",
    flex: 1,
    renderCell: (params) => (
      <Alert
        sx={{
          height: "100%",
          width: "100%",
          overflow: "hidden",
          "&.MuiAlert-message": { overflow: "hidden" },
          cursor: "pointer",
          "&:active": {
            opacity: 0.5,
          },
        }}
        severity={`${params.value ? "success" : "error"}`}
        variant="outlined"
      >
        <Box sx={{ overflow: "hidden" }}>
          {params.value ? "" : "NO "}CONTACTADO
        </Box>
      </Alert>
    ),
  },
  {
    field: "Action",
    headerName: "Opciones",
    flex: 1,
    renderCell: (params) => (
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        {options.map((option, index) => (
          <IconButton
            key={`icons-buttom-${index}`}
            sx={{ width: "40px" }}
            onClick={() => {
              option.action();
            }}
          >
            {option.icon}
          </IconButton>
        ))}
      </Box>
    ),
  },
];

export default columns;
