import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import React from "react";
import {
  ANAHITA_COLOR,
  FONT_FAMILY,
  PERSIAN_FONT_FAMILY,
} from "../../public/theme/theme";

function Scheduling(): JSX.Element {
  const { t } = useTranslation();
  const { locale } = useRouter();

  return (
    <TableContainer
      component={Paper}
      sx={{
        direction: locale === "fa" ? "rtl" : "ltr",
        mt: 10,
      }}
    >
      <Table sx={{ textAlign: "center" }}>
        <TableHead>
          <TableRow>
            <TableCell
              align="center"
              sx={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                fontFamily: locale === "fa" ? PERSIAN_FONT_FAMILY : FONT_FAMILY,
                color: ANAHITA_COLOR,
              }}
            >
              {t("OPENING_DAYS")}
            </TableCell>
            <TableCell
              align="center"
              sx={{
                fontSize: "1.5rem",
                fontWeight: "bold",
                fontFamily: locale === "fa" ? PERSIAN_FONT_FAMILY : FONT_FAMILY,
                color: ANAHITA_COLOR,
              }}
            >
              {t("OPENING_HOURS")}
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell
              align="center"
              sx={{
                fontFamily: locale === "fa" ? PERSIAN_FONT_FAMILY : FONT_FAMILY,
                fontSize: "1.1rem",
              }}
            >
              {t("WEEKDAYS_OPENING")}
            </TableCell>
            <TableCell
              align="center"
              sx={{
                fontFamily: locale === "fa" ? PERSIAN_FONT_FAMILY : FONT_FAMILY,
                fontSize: "1.1rem",
              }}
            >
              18 - 24
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell
              align="center"
              sx={{
                fontFamily: locale === "fa" ? PERSIAN_FONT_FAMILY : FONT_FAMILY,
                fontSize: "1.1rem",
              }}
            >
              {t("SUNDAY")}
            </TableCell>
            <TableCell
              align="center"
              sx={{
                fontFamily: locale === "fa" ? PERSIAN_FONT_FAMILY : FONT_FAMILY,
                fontSize: "1.1rem",
              }}
            >
              12 - 21
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Scheduling;
