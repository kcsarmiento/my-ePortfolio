export const prelimOutputs = [
  {
    "id": "exercise-1",
    "exerciseLabel": "Exercise 1",
    "exerciseCode": "Lab Exercise WW-M1",
    "title": "K-Nearest Neighbors in Government Decision Systems",
    "caption": {
      "title": "K-Nearest Neighbors in Government Decision Systems",
      "author": "Kc Sarmiento",
      "date": "January 16, 2026"
    },
    "outputEmbeds": [
      {
        "label": "kNN Notebook Preview",
        "url": "https://nbviewer.org/github/kcsarmiento/pt-p2-knn/blob/main/PT_P2_SARMIENTO_KC.ipynb",
        "altText": "Notebook page showing kNN workflow, parameter testing, and model evaluation outputs for the Iris dataset."
      },
      {
        "label": "IEEE Report Preview",
        "url": "https://drive.google.com/file/d/1yad8CVv5o7apfiEA37pDN_AZY6B-_NLx/preview",
        "altText": "IEEE-style paper page discussing government decision support use cases for kNN, including healthcare and disaster management."
      }
    ],
    "description": {
      "dataset": "The experiment uses the Iris Dataset, which contains sepal and petal measurements for iris flower species and serves as a standard benchmark for multi-class classification.",
      "source": "The dataset comes from the classic Fisher Iris dataset, commonly accessed through the Scikit-learn library for supervised learning experiments.",
      "problem": "The technical problem is to classify iris species accurately using k-Nearest Neighbors, while the broader analytical study evaluates how the same classification logic can support government decision systems such as healthcare triage, disaster risk mapping, and public-sector project governance."
    },
    "predictiveSkills": [
      "scikit-learn - KNeighborsClassifier implementation, model fitting, and evaluation",
      "train_test_split - controlled training and testing workflow for reliable validation",
      "MinMaxScaler - feature scaling and normalization before distance-based classification",
      "accuracy_score and parameter tuning - comparing multiple k values and validating stable performance"
    ],
    "soWhat": "As a future Software Developer, this project shows how I can connect machine learning code to high-impact government use cases. Systems that classify medical risk, identify disaster-prone locations, or predict project outcomes can support public-sector teams with faster, more transparent, and more data-driven decisions.",
    "importance": "This artifact is important because it links technical classification work to policy-relevant contexts, proving my ability to move from algorithm implementation to practical decision support design.",
    "reflection": "A key technical challenge in this experiment was balancing bias and variance. When I started with a very low k value, the model became too sensitive to noise. I solved this by building a modular Python workflow and testing multiple values of k, specifically 1, 3, 5, 7, and 9. Through this iterative process, I found that k = 3 and k = 5 produced the most stable performance, reaching 96% accuracy on the test set. This reinforced the importance of parameter tuning instead of relying on a single initial result.",
    "reflectionDetails": {
      "growth": "This work improved my ability to connect model outputs with governance implications and explain ML behavior to non-technical stakeholders.",
      "accomplishments": "I identified stable k settings and documented where kNN can support public-sector classification decisions responsibly.",
      "critique": "My initial evaluation relied heavily on overall accuracy and could be strengthened with fairness and subgroup diagnostics.",
      "alternative": "I will include bias checks and scenario simulation before proposing high-stakes deployment recommendations.",
      "shortTermGoal": "Expand model reporting with precision, recall, and clearer policy-oriented interpretation notes.",
      "longTermGoal": "Develop interpretable, auditable machine learning components for public-sector software systems."
    }
  },
  {
    "id": "exercise-2",
    "exerciseLabel": "Exercise 2",
    "exerciseCode": "Lab Exercise WW-M2",
    "title": "Iris Flower Species Classification using k-Nearest Neighbors (kNN)",
    "caption": {
      "title": "Iris Flower Species Classification using k-Nearest Neighbors (kNN)",
      "author": "Kc Sarmiento",
      "date": "January 23, 2026"
    },
    "outputEmbeds": [
      {
        "label": "kNN Notebook Preview",
        "url": "https://nbviewer.org/github/kcsarmiento/pt-p2-knn/blob/main/PT_P2_SARMIENTO_KC.ipynb",
        "altText": "Notebook section showing Iris feature preprocessing, kNN training, and confusion matrix evaluation."
      },
      {
        "label": "IEEE Report Preview",
        "url": "https://drive.google.com/file/d/14_v0R9cHV0ucHfV9sOSZ4_F76S1OTYLC/preview",
        "altText": "IEEE report page describing Iris classification methodology, results, and interpretation."
      }
    ],
    "description": {
      "dataset": "The experiment uses the classic Iris dataset containing sepal length, sepal width, petal length, and petal width for three iris species: Setosa, Versicolor, and Virginica.",
      "source": "The dataset originates from Ronald Fisher’s 1936 Iris dataset and is commonly accessed through Scikit-learn for introductory classification experiments.",
      "problem": "The goal is to classify iris flowers into the correct species using physical measurements, demonstrating how kNN can perform multi-class prediction on a clean and structured dataset."
    },
    "predictiveSkills": [
      "Python and pandas - loading and organizing the Fisher Iris dataset for analysis",
      "train_test_split - dividing data into training and testing sets for unbiased evaluation",
      "scikit-learn - building the kNN classifier and generating predictions",
      "Matplotlib, Seaborn, accuracy score, and confusion matrix - analyzing distributions and model performance"
    ],
    "soWhat": "Understanding a core classification algorithm like kNN is a foundational skill for my growth as a Software Developer. It prepares me to build pattern recognition features and automated decision logic into intelligent applications, which is essential for modern data-driven software and user-facing systems.",
    "importance": "This artifact demonstrates my mastery of foundational supervised learning workflows, which supports my transition to more complex and real-world analytics projects.",
    "reflection": "A specific technical challenge I faced was choosing the optimal value of k. When k was too low, the model became overly sensitive to noise, while larger values smoothed the classification boundaries too much. I resolved this by iteratively testing different k values and reviewing the confusion matrix to find the balance that produced high accuracy with minimal misclassification, especially between Versicolor and Virginica.",
    "reflectionDetails": {
      "growth": "I improved from simply running a classifier to deliberately tuning and validating model behavior with evidence.",
      "accomplishments": "I delivered stable multi-class classification and interpreted misclassification patterns in a structured way.",
      "critique": "I did not benchmark against alternative classifiers in this iteration.",
      "alternative": "I will compare kNN with Logistic Regression and Decision Trees to justify model selection more rigorously.",
      "shortTermGoal": "Add cross-validation and class-level performance reporting in future runs.",
      "longTermGoal": "Apply classification pipelines to higher-dimensional and less curated datasets."
    }
  },
  {
    "id": "exercise-3",
    "exerciseLabel": "Exercise 3",
    "exerciseCode": "Lab Exercise WW-M3",
    "title": "Advanced ML: Data Cleaning & Parameter Optimization",
    "caption": {
      "title": "Advanced ML: Data Cleaning & Parameter Optimization",
      "author": "Kc Sarmiento",
      "date": "February 1, 2026"
    },
    "outputEmbeds": [
      {
        "label": "Data Cleaning Notebook Preview",
        "url": "https://nbviewer.org/github/kcsarmiento/ww2-data-cleaning/blob/main/SarmientoWW2-datacleaning.ipynb",
        "altText": "Notebook workflow showing data sanitization, normalization, k tuning, and performance tracking across iterations."
      },
      {
        "label": "IEEE Report Preview",
        "url": "https://drive.google.com/file/d/1DGQIrB_uNJe2SadhSTa-s4NtHOgkS5XE/preview",
        "altText": "IEEE report section presenting data cleaning impact and performance gains from hyperparameter optimization."
      }
    ],
    "description": {
      "dataset": "This exercise uses a noisy customer dataset containing inconsistent categorical values, outliers, duplicates, and features with different scales.",
      "source": "The dataset was prepared as part of the laboratory exercise to simulate real-world machine learning data quality issues before model deployment.",
      "problem": "The core problem is improving predictive performance in a distance-based model by cleaning noisy data, normalizing features, and tuning parameters so that the resulting kNN model becomes more reliable and accurate."
    },
    "predictiveSkills": [
      "Python, pandas, and NumPy - building the data cleaning and preprocessing workflow",
      "Data cleaning - handling duplicates, inconsistent casing, and noisy categorical values",
      "Min-Max Normalization - scaling features so distance calculations remain balanced",
      "Hyperparameter tuning - testing k values from 1 to 20 to avoid overfitting and underfitting"
    ],
    "soWhat": "As an aspiring Software Developer, this project highlights why reliable applications depend on strong data engineering before model deployment. In professional systems, data is rarely clean, so building robust preprocessing pipelines ensures that the machine learning features integrated into software are dependable, scalable, and practical for real business use.",
    "importance": "This artifact proves that I can handle noisy real-world inputs and improve model reliability through engineering discipline, not just algorithm changes.",
    "reflection": "A major technical hurdle was the very low baseline accuracy of 42% caused by messy data. I traced the problem to inconsistent category labels, outliers, and feature scale disparities. I addressed this by building a multi-stage notebook workflow for sanitization, normalization, and hyperparameter testing. Data cleaning alone improved the model to 70.69% accuracy, and parameter optimization raised the final result to 72.41%, confirming that data preparation is the main driver of success in distance-based models like kNN.",
    "reflectionDetails": {
      "growth": "I learned to diagnose performance issues as data-quality problems and respond with repeatable preprocessing workflows.",
      "accomplishments": "I substantially improved predictive accuracy through cleaning and tuning stages with measurable gains.",
      "critique": "The preprocessing pipeline is currently notebook-based and not yet packaged for reuse.",
      "alternative": "I will modularize preprocessing steps into reusable pipeline components with validation checkpoints.",
      "shortTermGoal": "Automate data quality checks and improve reproducibility of preprocessing routines.",
      "longTermGoal": "Build production-ready ML pipelines with monitoring, retraining logic, and governance documentation."
    }
  },
  {
    "id": "exercise-4",
    "exerciseLabel": "Exercise 4",
    "exerciseCode": "Prelim Project P3",
    "title": "Laptop Price Estimation: A Comparative Regression Analysis",
    "caption": {
      "title": "Laptop Price Estimation: A Comparative Regression Analysis",
      "author": "Kc Sarmiento",
      "date": "February 14, 2026"
    },
    "outputEmbeds": [
      {
        "label": "Laptop Price Notebook Preview",
        "url": "https://nbviewer.org/github/kcsarmiento/Laptop-Price-Prediction/blob/main/PT-P3_Sarmiento.ipynb",
        "altText": "Notebook pages displaying feature extraction from laptop specs, regression model fitting, and error evaluation."
      },
      {
        "label": "IEEE Report Preview",
        "url": "https://drive.google.com/file/d/12lZWQWsSvdozKatMXV6lEihKKpil5Hpo/preview",
        "altText": "IEEE report discussing data cleaning decisions, simple versus multiple regression comparison, and MAE reduction."
      }
    ],
    "description": {
      "dataset": "This project uses a real-world laptop pricing dataset with hardware specifications such as RAM, storage, processor information, screen size, and selling price.",
      "source": "The dataset was scraped from retail websites and sourced from Kaggle at ankit07chy/laptopuncleaneddataset, which meant the raw fields required substantial cleaning before modeling.",
      "problem": "The predictive task is to estimate laptop prices and compare the effectiveness of Simple Linear Regression versus Multiple Linear Regression after cleaning inconsistent, incomplete, and noisy web-scraped data."
    },
    "predictiveSkills": [
      "pandas and NumPy - cleaning raw web-scraped data, extracting numeric features, and handling missing values",
      "Median-based imputation - filling incomplete fields without heavily biasing the distribution",
      "Interquartile Range (IQR) and box plots - detecting and suppressing extreme outliers before regression modeling",
      "scikit-learn LinearRegression, train_test_split, Mean Absolute Error, and R-squared - comparing simple and multiple regression performance"
    ],
    "soWhat": "Mastering data cleaning and predictive modeling is directly relevant to my future career as a Software Developer or Data Analyst. Real applications rarely receive perfectly prepared data, so the ability to transform messy inputs into reliable forecasts is essential for building intelligent, business-ready software.",
    "importance": "This artifact demonstrates end-to-end readiness for real analytics work, from noisy data handling to model comparison and performance communication.",
    "reflection": "The hardest part of this project was transforming noisy web-scraped text into usable numerical features while protecting the regression models from distorted price outliers. I addressed this by building a preprocessing workflow that extracted numeric values from strings like RAM specifications, applied median imputation for missing values, and used the IQR method with box plots to suppress extreme prices. After comparing both approaches, I found that Multiple Linear Regression outperformed the simple model and reduced Mean Absolute Error by about 30%, confirming that thoughtful preprocessing and richer feature sets materially improved predictive accuracy.",
    "reflectionDetails": {
      "growth": "I strengthened my ability to turn unstructured scraped data into usable predictive features for regression analysis.",
      "accomplishments": "I demonstrated a measurable MAE improvement by moving from simple to multiple regression after preprocessing.",
      "critique": "The evaluation would be stronger with cross-validation and additional residual diagnostics.",
      "alternative": "I will add k-fold cross-validation and compare regularized models such as Ridge and Lasso.",
      "shortTermGoal": "Expand model validation with richer metrics and diagnostic plots.",
      "longTermGoal": "Deploy robust forecasting services with automated quality checks and monitoring."
    }
  }
]
