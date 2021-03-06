import { makeNewSimulatorValidation } from './new-simulator-validation-factory'
import { ValidationComposite, RequiredFieldValidation, EmailValidation } from '@/validation/validators'
import { Validation } from '@/presentation/protocols/validation'
import { EmailValidatorAdapter } from '@/infra/validators/email-validator-adapter'

jest.mock('@/validation/validators/validation-composite')

describe('NewSimulatorValidation Factory', () => {
  test('Should call ValidationComposite with all validations', () => {
    makeNewSimulatorValidation()
    const validations: Validation[] = []
    for (const field of ['name', 'email', 'tax', 'number', 'amount']) {
      validations.push(new RequiredFieldValidation(field))
    }
    validations.push(new EmailValidation('email', new EmailValidatorAdapter()))
    expect(ValidationComposite).toHaveBeenCalledWith(validations)
  })
})
