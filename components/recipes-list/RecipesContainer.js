import { connect } from 'react-redux';
import RecipesList from './RecipesList';

const mapStateToProps = ({ content }) => {
  const { isLoading, recipes } = content;

  return {
    recipes,
    isLoading,
  };
};

export default connect(mapStateToProps)(RecipesList);
