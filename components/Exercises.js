import React,{useEffect,useState} from 'react'
import  {Pagination}  from '@mui/material';
import { Box,Stack,Typography } from '@mui/material';
import { exerciseOptions,fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';

const Exercises = ({exercises,setExercises,bodyPart}) => {
  console.log(exercises);
  
  const [currentPage, setCurrentPage] = useState(1)
  const execisesPerPage=9;

  const indexOfLastExercise = currentPage*execisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise-execisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise,indexOfLastExercise);

  const paginate = (e,value) => {
    setCurrentPage(value);
    window.scrollTo({top:1800,behavior:'smooth'})
  }

  useEffect(() => {
   const fetchExercisesData = async () => {
    let exercisesData = [];

    if(bodyPart === 'all'){
      exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=1300',exerciseOptions);
    }
    else{
      exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=1300`,exerciseOptions);
    }
    setExercises(exercisesData);
   }
   fetchExercisesData();
  },[bodyPart]);

  return (
    <Box id="execises"
    sx={{mt:{lg:'110px'}}}
    mt="50px"
    p="20px"
    >
      <Typography variant='h3' mb={"46px"}>
        Showing Results
      </Typography>
      <Stack direction={"row"} sx={{gap:{lg:'50px',xs:'50px'}}}
      flexWrap="wrap" justifyContent={"center"}>
        {currentExercises.map((exercise,index) => (
          <ExerciseCard key={index} exercise={exercise}/> 
        
        ))}

      </Stack >
      <Stack mt={"100px"} alignItems={"center"}>
        {exercises.length > 9 && (
          <Pagination 
          color="standard"
          shape='rounded'
          defaultPage={1}
          count={Math.ceil(exercises.length/execisesPerPage)}
          page={currentPage}
          onChange={paginate}
          size='large'

          />
        )}

      </Stack>



    </Box>
  )
}

export default Exercises