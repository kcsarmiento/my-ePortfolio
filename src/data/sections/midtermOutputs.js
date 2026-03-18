export const midtermOutputs = [
  {
    id: 'midterm-exercise-1',
    exerciseLabel: 'Exercise 1',
    exerciseCode: 'PT-M1',
    title: 'Predictive Modeling of Titanic Survival Using Binary Logistic Regression',
    caption: {
      title: 'Predictive Modeling of Titanic Survival Using Binary Logistic Regression',
      author: 'Kc Sarmiento',
      date: 'March 2026',
    },
    outputEmbeds: [
      {
        label: 'Notebook Preview',
        url: 'https://nbviewer.org/github/kcsarmiento/titanic-logistic-regression/blob/main/SARMIENTO_Exercise_PTM1_notebook.ipynb',
        altText:
          'Notebook showing preprocessing, logistic regression experiments, threshold analysis, and cross-validation for Titanic survival prediction.',
      },
      {
        label: 'IEEE Report Preview',
        url: 'https://docs.google.com/document/d/1_7b7FX_RG6fq_nkot8cQ4Fr2J-Dm9hpicHVTeCOLqlc/preview',
        altText:
          'IEEE write-up documenting methodology, experiment comparisons, and conclusions for PT-M1.',
      },
    ],
    description: {
      dataset:
        'The activity used the Titanic train.csv dataset with 891 passenger records and 21 columns, then transformed it into a model-ready structure after preprocessing.',
      source:
        'Data source is the Kaggle Titanic training partition, used as the primary dataset for binary classification experiments.',
      problem:
        'The problem solved is predicting passenger survival (0 or 1) using Binary Logistic Regression, while analyzing regularization, feature combinations, and threshold behavior for practical decision support.',
    },
    predictiveSkills: [
      'Data preprocessing pipeline - column reduction, duplicate handling, IQR capping, label encoding, and median imputation',
      'Binary Logistic Regression - training and evaluating sigmoid-based classification for survival prediction',
      'Model diagnostics - confusion matrix, precision, recall, F1-score, and coefficient interpretation',
      'Model validation and tuning - C-parameter testing, threshold adjustment, feature selection, and 5-fold cross-validation',
    ],
    soWhat:
      'For my path as a Software Developer, this output proves I can build a full predictive pipeline, not just a single model run. It shows I can connect technical model behavior to real decision trade-offs, especially in safety-critical contexts where missing true positives is costly.',
    importance:
      'This artifact is important because it demonstrates end-to-end machine learning practice: from cleaning noisy tabular data to selecting a best-performing model configuration with reproducible validation.',
    reflection:
      'Based on my IEEE analysis, the most important technical lesson was balancing model accuracy with practical risk. My baseline Logistic Regression model reached 78.85% accuracy, but the best configuration (Sex, Pclass, Age) improved to 80.13%. I also learned that threshold choice changes system behavior significantly: using 0.3 increased recall to 0.8154 and reduced missed survivors compared with stricter thresholds. The 5-fold cross-validation mean of 76.54% confirmed that results are stable but also reminded me that single split performance can be optimistic.',
    reflectionDetails: {
      growth:
        'I improved in interpreting metrics beyond accuracy and connecting model outputs to operational decision consequences.',
      accomplishments:
        'I completed a full IEEE-style experiment flow with hyperparameter testing, feature selection, threshold analysis, and cross-validation.',
      critique:
        'My current work can still be improved with stronger fairness checks and broader model comparisons beyond Logistic Regression.',
      alternative:
        'Next iteration, I will add GridSearchCV, ROC-AUC optimization, and benchmark models such as Random Forest and Gradient Boosting.',
      shortTermGoal:
        'Enhance reporting with clearer threshold recommendation rules for different deployment contexts.',
      longTermGoal:
        'Design reliable and auditable predictive modules for real software products with transparent evaluation standards.',
    },
  },
]