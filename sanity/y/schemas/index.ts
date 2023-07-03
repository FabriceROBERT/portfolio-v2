import { SchemaTypeDefinition } from 'sanity';
import pageInfo from './pageInfo';
import skill from './skill';
import social from './social';
import project from './project';
import experience from './experience';

const schema: { types: SchemaTypeDefinition[] } = {
  types: [pageInfo, skill, social, project, experience],
};

export default schema;
