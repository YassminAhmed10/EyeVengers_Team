import React from "react";
import ClearButton from "./ClearButton"; // استيراد الكومبوننت
import {
  Box,
  TextField,
  Typography,
  Grid,
  Button,
  IconButton,
  MenuItem,
  Autocomplete,
} from "@mui/material";
import { Delete, AddCircle } from "@mui/icons-material";

const mockDrugs = [
  { label: "Panadol", form: "Tablet" },
  { label: "Cataflam", form: "Tablet" },
  { label: "Augmentin", form: "Syrup" },
  { label: "Tobradex", form: "Drop" },
  { label: "Brufen", form: "Tablet" },
  { label: "Otrivin", form: "Drop" },
];

const drugForms = ["Tablet", "Drop", "Syrup", "Cream", "Injection"];
const frequencies = [
  "Once daily",
  "Twice daily",
  "Three times daily",
  "Every 8 hours",
  "Before sleep",
  "As needed",
  "Other",
];

const PrescriptionForm = ({ data, setData }) => {
  const handleChange = (index, field, value) => {
    const updated = [...data];
    updated[index][field] = value;
    setData(updated);
  };

  const addPrescription = () => {
    setData([
      ...data,
      { drug: "", form: "", dose: "", frequency: "", customFrequency: "", notes: "" },
    ]);
  };

  const removePrescription = (index) => {
    setData(data.filter((_, i) => i !== index));
  };

  return (
    <Box sx={{ mt: 3, width: "100%" }}>
      {/* Header مع زر ClearButton */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
        <Typography variant="h5" sx={{ mb: 2, fontWeight: 600 }}>
          Prescription Details
        </Typography>
        <ClearButton
          label="Clear Prescriptions"
          onClear={() =>
            setData([
              { drug: "", form: "", dose: "", frequency: "", customFrequency: "", notes: "" },
            ])
          }
        />
      </Box>

      {data.map((item, index) => (
        <Grid
          container
          spacing={2}
          key={index}
          sx={{
            mb: 2,
            p: 2,
            border: "1px solid #ccc",
            borderRadius: 2,
            alignItems: "center",
            backgroundColor: "#fff",
          }}
        >
          {/* Drug Name */}
          <Grid item xs={12} sm={6}>
            <Autocomplete
              freeSolo
              options={mockDrugs}
              getOptionLabel={(option) => option.label || ""}
              onChange={(e, value) =>
                handleChange(index, "drug", value?.label || "")
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Drug Name"
                  placeholder="Search or type drug..."
                  variant="outlined"
                  fullWidth
                  value={item.drug}
                  onChange={(e) => handleChange(index, "drug", e.target.value)}
                  sx={{ "& .MuiInputBase-root": { minWidth: "400px" } }}
                />
              )}
            />
          </Grid>

          {/* Form */}
          <Grid item xs={12} sm={2}>
            <TextField
              select
              label="Form"
              variant="outlined"
              fullWidth
              value={item.form}
              onChange={(e) => handleChange(index, "form", e.target.value)}
            >
              {drugForms.map((form) => (
                <MenuItem key={form} value={form}>
                  {form}
                </MenuItem>
              ))}
            </TextField>
          </Grid>

          {/* Dose */}
          <Grid item xs={12} sm={2}>
            <TextField
              label="Dose"
              variant="outlined"
              fullWidth
              value={item.dose}
              onChange={(e) => handleChange(index, "dose", e.target.value)}
              placeholder="e.g., 1 tablet / 5 ml"
            />
          </Grid>

          {/* Frequency */}
          <Grid item xs={12} sm={2}>
            <TextField
              select
              label="Frequency"
              variant="outlined"
              fullWidth
              value={item.frequency}
              onChange={(e) => handleChange(index, "frequency", e.target.value)}
            >
              {frequencies.map((freq) => (
                <MenuItem key={freq} value={freq}>
                  {freq}
                </MenuItem>
              ))}
            </TextField>

            {item.frequency === "Other" && (
              <TextField
                label="Custom Frequency"
                variant="outlined"
                fullWidth
                sx={{ mt: 1 }}
                value={item.customFrequency}
                onChange={(e) =>
                  handleChange(index, "customFrequency", e.target.value)
                }
                placeholder="Enter custom frequency..."
              />
            )}
          </Grid>

          {/* Delete Button */}
          <Grid
            item
            xs={12}
            sm={1}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <IconButton color="error" onClick={() => removePrescription(index)}>
              <Delete />
            </IconButton>
          </Grid>

          {/* Notes */}
          <Grid item xs={12}>
            <TextField
              label="Notes"
              multiline
              rows={2}
              fullWidth
              value={item.notes}
              onChange={(e) => handleChange(index, "notes", e.target.value)}
              placeholder="Add any specific notes..."
            />
          </Grid>
        </Grid>
      ))}

      <Box sx={{ display: "flex", gap: 2 }}>
        <Button
          variant="contained"
          startIcon={<AddCircle />}
          onClick={addPrescription}
        >
          Add Another Drug
        </Button>
      </Box>
    </Box>
  );
};

export default PrescriptionForm;