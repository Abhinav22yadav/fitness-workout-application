import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

const VideoItem = ({ video }) => (
  <a
    className="exercise-video"
    href={`https://www.youtube.com/watch?v=${video.videoId}`}
    target='_blank'
    rel='noreferrer'
  >
    <img src={video.thumbnails[0].url} alt={video.title} />
    <Box>
      <Typography variant='h5' color="#000">
        {video.title}
      </Typography>
      <Typography variant='h6' color="#000">
        {video.channelName}
      </Typography>
    </Box>
  </a>
);

const ExerciseVideos = ({ exerciseVideos = [], name }) => {
  if (!exerciseVideos || exerciseVideos.length === 0) return null; // Handle empty case

  return (
    <Box sx={{ marginTop: { lg: '200px', xs: '20px' } }} p="20px">
      <Typography variant='h3' mb="33px">
        Watch <span style={{ color: '#ff2625', textTransform: 'capitalize' }}>{name}</span> exercise Videos
      </Typography>
      <Stack justifyContent="flex-start" flexWrap="wrap" alignItems="center"
        sx={{
          flexDirection: { lg: 'row' },
          gap: { lg: '110px', xs: '0' }
        }}
      >
        {exerciseVideos.slice(0, 6).map((item) => (
          <VideoItem key={item.video.videoId} video={item.video} />
        ))}
      </Stack>
    </Box>
  );
}

export default ExerciseVideos;
