function TurnBack () {
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 30)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, 30)
        while (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0) {
        	
        }
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 30)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 30)
        while (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        	
        }
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 30)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 30)
        while (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        	
        }
    } else {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, 30)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 30)
        while (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        	
        }
        while (maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        	
        }
    }
}
basic.forever(function () {
    if (maqueen.Ultrasonic(PingUnit.Centimeters) != 0 && maqueen.Ultrasonic(PingUnit.Centimeters) < 10) {
        TurnBack()
    }
    if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 0 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 1) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
    } else if (maqueen.readPatrol(maqueen.Patrol.PatrolLeft) == 1 && maqueen.readPatrol(maqueen.Patrol.PatrolRight) == 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
    } else {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
    }
})
