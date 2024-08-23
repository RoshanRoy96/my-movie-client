import React from 'react';
import { Box } from "@mui/material";
import Container from './Container';
import MediaSlide from './MediaSlide';
import uiConfigs from '../../configs/ui.configs';

const MediaSection = ({ mediaType, mediaCategory, header }) => {
  return (
    <Box marginTop="-4rem" sx={{ ...uiConfigs.style.mainContent }}>
      <Container header={header}>
        <MediaSlide mediaType={mediaType} mediaCategory={mediaCategory} />
      </Container>
    </Box>
  );
};

export default MediaSection;
