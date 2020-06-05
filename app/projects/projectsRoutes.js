const express = require('express');

const router = express.Router();
const ProjectsController = require('./ProjectsController');
const Token = require('../utils/Token');

router.get('/', Token.Verify, ProjectsController.getProjectsWithImage);

router.get('/project', ProjectsController.getProjectsByIdProcess);

router.get('/projectss', ProjectsController.getProjectsByIdProcessTwo);

router.get('/users', ProjectsController.getProjectsByUsers);

router.get('/:idProject', ProjectsController.getProjectOne);

router.get('/homework/:idProject', ProjectsController.getHomeworkFromAProject);

router.get('/rewards/:idProject', ProjectsController.getRewardsFromAProject);

router.post('/homework', ProjectsController.createHomework);

router.get('/:id/homeworks', ProjectsController.getHomeworksByIdProjectOne);

router.get('/:id/homeworkss', ProjectsController.getHomeworksByIdProjectTwo);

router.get('/:id/homeworksss', ProjectsController.getHomeworksByIdProjectThird);

router.post('/reward', ProjectsController.createReward);

router.post('/reward/image', ProjectsController.saveReward);

router.put('/qualificationAverage/:id', ProjectsController.updateProjectQualificationAverage);

router.put('/process/edition/project/:id', ProjectsController.updateProjectToEdition);

router.put('/process/project/:id', ProjectsController.updateProjectToRevision);

router.put('/process/aproved/project/:id', ProjectsController.updateProjectToAproved);

router.put('/process/cancel/project/:id', ProjectsController.updateProjectToCancel);

router.put('/homework/qualification/:id', ProjectsController.updateHomeworkQualificationAverage);

router.put('/homework/edition/:id', ProjectsController.updateHomeworkToEdition);

router.put('/homework/revision/:id', ProjectsController.updateHomeworkToRevision);

router.put('/homework/aproved/:id', ProjectsController.updateHomeworkToAproved);

router.put('/deliverie/edition/:id', ProjectsController.updateDeliverieToEdition);

router.put('/deliverie/revision/:id', ProjectsController.updateDeliverieToRevision);

router.put('/deliverie/aproved/:id', ProjectsController.updateDeliverieToAproved);

router.put('/deliverie/cancel/:id', ProjectsController.updateDeliverieToCancel);

router.put('/deliverie/qualification/:id', ProjectsController.updateDeliverieQualificationAverage);

router.put('/homework/:id', ProjectsController.updateHomework);

router.put('/image/homework/:id', ProjectsController.updateImageHomeworkByIdHomework);

router.post('', Token.Verify, ProjectsController.create);

router.post('/image', Token.Verify, ProjectsController.saveImage);

router.post('/homework/image', Token.Verify, ProjectsController.saveHomework);

router.get('/users/:idUser', Token.Verify, ProjectsController.getImageByIdProjects);

router.put('/:id', Token.Verify, ProjectsController.updateProjectById);

router.delete('/:id', Token.Verify, ProjectsController.deleteProjectById);

router.post('/projectQualification', ProjectsController.createProjectQualification);
router.get('/projectQualification/user/:idUser/project/:idProject',
  ProjectsController.getProjectQualificationByUserAndProject);
router.put('/projectQualification/:id', ProjectsController.updateProjectQualification);
router.get('/projectQualification/project/:idProject',
  ProjectsController.getProjectQualificationByProject);


router.post('/homeworkQualification', ProjectsController.createHomeworkQualification);
router.get('/homeworkQualification/user/:idUser/homework/:idHomework',
  ProjectsController.getHomeworkQualificationByUserAndHomework);
router.put('/homeworkQualification/:id', ProjectsController.updateHomeworkQualification);
router.get('/homeworkQualification/homework/:idHomework',
  ProjectsController.getHomeworkQualificationByHomework);


router.get('/:idHomework/homeworks/deliveries/:process',
  ProjectsController.getDeliverieByIdHomeworkByIdProcess);
router.post('/deliveries', ProjectsController.createDeliverie);
router.post('/deliveries/image', ProjectsController.saveImageDeliverie);


router.post('/deliveriesQualification', ProjectsController.createDeliveriesQualification);
router.get('/deliveriesQualification/user/:idUser/deliveries/:idDeliveries',
  ProjectsController.getDeliveriesQualificationByUserAndIdDeliveries);
router.put('/deliveriesQualification/:id', ProjectsController.updateDeliveriesQualification);
router.get('/deliveriesQualification/deliveries/:idDeliveries',
  ProjectsController.getDeliveriesQualificationByIdDeliveries);

module.exports = router;
