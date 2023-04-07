OPERATION OF DRIVER DETEECTION MODEL MANUAL
    + For my case I used VScode for IDE <instructions will be based on it>

    Python packages to be installed<asyming ou already have python installed
    + Tensosorflow
    +Any other package you might be missing for the code.

    STEPS
    1.Copy the folder structure as it is, dont move anything emphasis on the 'Models' folder.

    2.In 'inference.py' file change thi listeners
        'path_to_model ='/home/corey/Documents/ML/driver-drive/Models/Predefine_Architecture_VGG16_Model.h5''
        to the path to the models folder according to the device.
            NB - dont miss on the path else the model will not load.

    3. Run the 'inference.py' file by 'python3 inference.py' command or any other way you use to run python files.

    4. If the packages are not installed by then, the code will throw some errors in terminal based on that you can debug accordingly.

    5.The model will run successfully and will display two video windows 1 for input and the other for output.

    6.Good device camera is recommended else the model accuracy will be affected buy blur images.

    7.How to quit the model.
        + press the esc key to quit the running 
        + With cursor on your terminal hit command + c in mac or ctrl + c in other opearating systems