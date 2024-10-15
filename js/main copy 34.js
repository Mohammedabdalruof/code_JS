// # ( 34 )                  { بسم الله الرحمن الرحيم }

/*
    Switch Statement 
    Switch (expression) (
        Case 1:
            // Code Block 
            break;
        Case 2:
            // Code Block 
            break;
        Default:
            // Code Block
    }
    -- Default Ordering
    -- Multiple Match
    -- ===
*/ 


    let day = 3;

    switch (day) {
    case 0:
        console.log("Saturday");
        break;
    case 1:
        console.log("Sunday"); 
        break;
    case 2:
    case 3:
        console.log("Monday"); 
        break;
    default:
    console.log("Unknown Day");
}