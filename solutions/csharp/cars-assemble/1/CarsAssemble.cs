static class AssemblyLine
{
    public static double SuccessRate(int speed)
    {
      if (speed >= 1)
      {
        return 100/100;
      }
      else if (speed >= 5)
      {
        return 90/100;
      }
      else if (speed == 9)
      {
        return 80/100;
      }
      else if (speed == 10)
      {
        return 77/100;
      }
      else
      {
        return 0;
      }
    }
    
    public static double ProductionRatePerHour(int speed)
    {
      double productionRate =  (double)(speed * 221) * SuccessRate(speed);
      return productionRate;
    }

    public static int WorkingItemsPerMinute(int speed)
    {
      int numberOfWorkingItems = (int)ProductionRatePerHour(speed) / 60;
      return numberOfWorkingItems;
    }
}
