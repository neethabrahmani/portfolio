import azure from '../app/assets/svg/skills/azure.svg';
import c from '../app/assets/svg/skills/c.svg';
import css from '../app/assets/svg/skills/css.svg';
import django from '../app/assets/svg/skills/django.svg';
import git from '../app/assets/svg/skills/git.svg';
import html from '../app/assets/svg/skills/html.svg';
import java from '../app/assets/svg/skills/java.svg';
import javascript from '../app/assets/svg/skills/javascript.svg';
import linux from '../app/assets/svg/skills/linux.svg';
import mysql from '../app/assets/svg/skills/mysql.svg';
import numpy from '../app/assets/svg/skills/numpy.svg';
import pandas from '../app/assets/svg/skills/pandas.svg';
import postgresql from '../app/assets/svg/skills/postgresql.svg';
import python from '../app/assets/svg/skills/python.svg';
import scikitlearn from '../app/assets/svg/skills/scikit-learn.svg';
import tensorflow from '../app/assets/svg/skills/tensorflow.svg';


export const skillsImage = (skill) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'python':
      return python;
    case 'c':
      return c;
    case 'java':
      return java;
    case 'mysql':
      return mysql;
    case 'postgresql':
      return postgresql;
    case 'django':
      return django;
    case 'git':
      return git;
    case 'linux':
      return linux;
    case 'tensorflow':
      return tensorflow;
    case 'pandas':
      return pandas;
    case 'numpy':
      return numpy;
    case 'sklearn':
      return scikitlearn;
    case 'azure':
      return azure;
    case 'html':
      return html;
    case 'css':
      return css;
    case 'javascript':
      return javascript;
    default:
      break;
  }
}
