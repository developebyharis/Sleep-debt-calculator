const getSleepHours = day => {
    if (day === 'monday') {
       return 8;
    } else if (day === 'tuesday') {
      return 7
    } else if (day === 'wednesday') {
      return 9;
    } else if (day === 'thursday') {
      return 5;
    } else if (day === 'friday') {
      return 10;
    } else if (day === 'saturday') {
      return 9;
    } else if (day === 'sunday') {
      return 12;
    }
  } ;
  
  console.log(getSleepHours('monday'));
  console.log(getSleepHours('tuesday'));
  console.log(getSleepHours('sunday'));
  
  const getActualSleepHours = () => {
     getSleepHours('monday') + 
     getSleepHours('tuesday') +
     getSleepHours('wednesday') +
     getSleepHours('thursday') +
     getSleepHours('friday') +
     getSleepHours('saturday') +
     getSleepHours('sunday');
    }
    const getIdealSleepHours = () => {
      const getIdealHours = 8;
      return getIdealHours * 7;
    };
    console.log(getIdealSleepHours);
  if (getActualSleepHours === getIdealSleepHours) {
    console.log('same');
  
  } else if (getActualSleepHours > getIdealSleepHours) {
    console.log('you got' + (getIdealSleepHours - getActualSleepHours) + 'hours less sleep than you need this needed this week get some rest');
  } else {
  
  }
  