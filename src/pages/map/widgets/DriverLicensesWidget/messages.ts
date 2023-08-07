import { defineMessages } from 'react-intl';

export const driverLicensesMessages = defineMessages({
  title: {
    id: 'DriverLicenses.title',
    defaultMessage: 'Driver Licenses',
  },
  viennaConventionTitle: {
    id: 'DriverLicenses.viennaConventionTitle',
    defaultMessage: 'Vienna Convention (1968)',
  },
  viennaConventionDescription: {
    id: 'DriverLicenses.viennaConventionDescription',
    defaultMessage: 'Allows to use national driver license.',
  },
  genevaConventionTitle: {
    id: 'DriverLicenses.genevaConventionTitle',
    defaultMessage: 'Geneva Convention (1949)',
  },
  genevaConventionDescription: {
    id: 'DriverLicenses.genevaConventionDescription',
    defaultMessage: 'Requires international driver license in addition to national to drive cars.',
  },
});
